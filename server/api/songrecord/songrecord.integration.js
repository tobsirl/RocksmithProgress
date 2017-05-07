'use strict';

/* globals describe, expect, it, beforeEach, afterEach */

var app = require('../..');
import request from 'supertest';

var newSongrecord;

describe('Songrecord API:', function() {
  describe('GET /api/songrecords', function() {
    var songrecords;

    beforeEach(function(done) {
      request(app)
        .get('/api/songrecords')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          songrecords = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      songrecords.should.be.instanceOf(Array);
    });
  });

  describe('POST /api/songrecords', function() {
    beforeEach(function(done) {
      request(app)
        .post('/api/songrecords')
        .send({
          songName: 'Today',
          artistName: 'Smashing Pumpkins',
          difficulty: 100,
          speed: 100
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          newSongrecord = res.body;
          done();
        });
    });

    it('should respond with the newly created songrecord', function() {
      newSongrecord.should.have.property('songName', 'Today');
      newSongrecord.songName.should.equal('Today');
      newSongrecord.artistName.should.equal('Smashing Pumpkins');
      newSongrecord.difficulty.should.equal(100);
      newSongrecord.should.have.property('difficulty');
      newSongrecord.difficulty.should.be.within(0, 100);
      newSongrecord.speed.should.equal(100);
    });
  });

  describe('GET /api/songrecords/:id', function() {
    var songrecord;

    beforeEach(function(done) {
      request(app)
        .get(`/api/songrecords/${newSongrecord._id}`)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          songrecord = res.body;
          done();
        });
    });

    afterEach(function() {
      songrecord = {};
    });

    it('should respond with the requested songrecord', function() {
      newSongrecord.songName.should.equal('Today');
      newSongrecord.artistName.should.equal('Smashing Pumpkins');
      newSongrecord.difficulty.should.equal(100);
      newSongrecord.speed.should.equal(100);
    });
  });

  describe('PUT /api/songrecords/:id', function() {
    var updatedSongrecord;

    beforeEach(function(done) {
      request(app)
        .put(`/api/songrecords/${newSongrecord._id}`)
        .send({
          songName: 'Alive',
          artistName: 'Pearl Jam',
          difficulty: 100,
          speed: 100
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if(err) {
            return done(err);
          }
          updatedSongrecord = res.body;
          done();
        });
    });

    afterEach(function() {
      updatedSongrecord = {};
    });

    it('should respond with the updated songrecord', function() {
      updatedSongrecord.songName.should.equal('Alive');
      updatedSongrecord.artistName.should.equal('Pearl Jam');
      updatedSongrecord.difficulty.should.equal(100);
      updatedSongrecord.speed.should.equal(100);
      //updatedSongrecord.name.should.equal('Updated Songrecord');
      //updatedSongrecord.info.should.equal('This is the updated songrecord!!!');
    });

    it('should respond with the updated songrecord on a subsequent GET', function(done) {
      request(app)
        .get(`/api/songrecords/${newSongrecord._id}`)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          let songrecord = res.body;
          songrecord.songName.should.equal('Alive');
          songrecord.artistName.should.equal('Pearl Jam');
          songrecord.difficulty.should.equal(100);
          songrecord.speed.should.equal(100);
          //songrecord.name.should.equal('Updated Songrecord');
         // songrecord.info.should.equal('This is the updated songrecord!!!');

          done();
        });
    });
  });

  describe('PATCH /api/songrecords/:id', function() {
    var patchedSongrecord;

    beforeEach(function(done) {
      request(app)
        .patch(`/api/songrecords/${newSongrecord._id}`)
        .send([
          { op: 'replace', path: '/songName', value: 'Disarm' },
          { op: 'replace', path: '/artistName', value: 'Smashing Pumpkins' }
        ])
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if(err) {
            return done(err);
          }
          patchedSongrecord = res.body;
          done();
        });
    });

    afterEach(function() {
      patchedSongrecord = {};
    });

    it('should respond with the patched songrecord', function() {
      patchedSongrecord.songName.should.equal('Disarm');
      patchedSongrecord.artistName.should.equal('Smashing Pumpkins');
    });
  });

  describe('DELETE /api/songrecords/:id', function() {
    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete(`/api/songrecords/${newSongrecord._id}`)
        .expect(204)
        .end(err => {
          if(err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when songrecord does not exist', function(done) {
      request(app)
        .delete(`/api/songrecords/${newSongrecord._id}`)
        .expect(404)
        .end(err => {
          if(err) {
            return done(err);
          }
          done();
        });
    });
  });
});
