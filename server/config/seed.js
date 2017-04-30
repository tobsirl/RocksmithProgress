/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';
import Songrecord from '../api/songrecord/songrecord.model';
import config from './environment/';

export default function seedDatabaseIfNeeded() {
  if(config.seedDB) {
    Songrecord.find({}).remove()
      .then(() => {
        let songrecord = Songrecord.create({

          _id: '59039d8a7ef2a628e0827123',
          songName: 'Disarm',
          artistName: 'Smashing Pumpkins',
          difficulty: 100,
          speed: 100,
          levelUp: true,
          accelerate: true,
          dateCreated: '2017-04-28T19:52:42.112Z',
          advancedSettings: [{
            difficultyRepeats: '3',
            speedRepeats: '2',
            tolerance: 'Low',
            speedIncrement: '3',
            rewindAnimation: true,
            masterMode: true,
            autoContinue: true,
            showMistakes: true
          }]
        }, {
          _id: '59039efd6bb4e03fd403b04f',
          songName: 'Alive',
          artistName: 'Pearl Jam',
          difficulty: 100,
          speed: 70,
          levelUp: true,
          accelerate: true,
          dateCreated: '2017-04-28T19:58:53.403Z',
          advancedSettings: [{
            difficultyRepeats: '3',
            speedRepeats: '2',
            tolerance: 'Low',
            speedIncrement: '3',
            rewindAnimation: true,
            masterMode: true,
            autoContinue: true,
            showMistakes: true
          }]
        }, {
          _id: '5903acb8b1699a1ae4af2845',
          songName: 'Come As You Are',
          artistName: 'Nirvana',
          difficulty: 100,
          speed: 90,
          levelUp: true,
          accelerate: true,
          dateCreated: '2017-04-28T20:57:28.183Z',
          advancedSettings: [{
            difficultyRepeats: '2',
            speedRepeats: '2',
            tolerance: 'Med',
            speedIncrement: '5',
            rewindAnimation: true,
            masterMode: true,
            autoContinue: true,
            showMistakes: false
          }]
        }, {
          _id: '5903adc6b1699a1ae4af2847',
          songName: 'She Bangs the Drums',
          artistName: 'The Stone Roses',
          difficulty: 100,
          speed: 70,
          levelUp: true,
          accelerate: true,
          dateCreated: '2017-04-28T21:01:58.998Z',
          advancedSettings: [{
            difficultyRepeats: '3',
            speedRepeats: '2',
            tolerance: 'Low',
            speedIncrement: '3',
            rewindAnimation: true,
            masterMode: true,
            autoContinue: true,
            showMistakes: true
          }]
        }, {
          _id: '5903af12b1699a1ae4af2848',
          songName: 'Starlight',
          artistName: 'Muse',
          difficulty: 100,
          speed: 60,
          levelUp: false,
          accelerate: false,
          dateCreated: '2017-04-28T21:07:30.823Z',
          advancedSettings: [{
            difficultyRepeats: '3',
            speedRepeats: '2',
            tolerance: 'Low',
            speedIncrement: '3',
            rewindAnimation: true,
            masterMode: false,
            autoContinue: true,
            showMistakes: true
          }]

        });

        return songrecord;
      })
    .then(() => console.log('finished populating songs'))
    .catch(err => console.log('error populating songs', err));
  }
}
