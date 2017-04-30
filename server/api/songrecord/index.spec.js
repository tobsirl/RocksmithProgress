'use strict';

/* globals sinon, describe, expect, it */

var proxyquire = require('proxyquire').noPreserveCache();

var songrecordCtrlStub = {
  index: 'songrecordCtrl.index',
  show: 'songrecordCtrl.show',
  create: 'songrecordCtrl.create',
  upsert: 'songrecordCtrl.upsert',
  patch: 'songrecordCtrl.patch',
  destroy: 'songrecordCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var songrecordIndex = proxyquire('./index.js', {
  express: {
    Router() {
      return routerStub;
    }
  },
  './songrecord.controller': songrecordCtrlStub
});

describe('Songrecord API Router:', function() {
  it('should return an express router instance', function() {
    songrecordIndex.should.equal(routerStub);
  });

  describe('GET /api/songrecords', function() {
    it('should route to songrecord.controller.index', function() {
      routerStub.get
        .withArgs('/', 'songrecordCtrl.index')
        .should.have.been.calledOnce;
    });
  });

  describe('GET /api/songrecords/:id', function() {
    it('should route to songrecord.controller.show', function() {
      routerStub.get
        .withArgs('/:id', 'songrecordCtrl.show')
        .should.have.been.calledOnce;
    });
  });

  describe('POST /api/songrecords', function() {
    it('should route to songrecord.controller.create', function() {
      routerStub.post
        .withArgs('/', 'songrecordCtrl.create')
        .should.have.been.calledOnce;
    });
  });

  describe('PUT /api/songrecords/:id', function() {
    it('should route to songrecord.controller.upsert', function() {
      routerStub.put
        .withArgs('/:id', 'songrecordCtrl.upsert')
        .should.have.been.calledOnce;
    });
  });

  describe('PATCH /api/songrecords/:id', function() {
    it('should route to songrecord.controller.patch', function() {
      routerStub.patch
        .withArgs('/:id', 'songrecordCtrl.patch')
        .should.have.been.calledOnce;
    });
  });

  describe('DELETE /api/songrecords/:id', function() {
    it('should route to songrecord.controller.destroy', function() {
      routerStub.delete
        .withArgs('/:id', 'songrecordCtrl.destroy')
        .should.have.been.calledOnce;
    });
  });
});
