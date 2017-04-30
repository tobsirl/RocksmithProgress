'use strict';

import mongoose from 'mongoose';
import {registerEvents} from './songrecord.events';

//========================================================================
// Song Record Schema
//========================================================================

//Additional Options - None of them required
var advancedSettingsSchema = new mongoose.Schema({
  difficultyRepeats: {type: String, enum: ['Infinite', '1', '2', '3', '5']},
  speedRepeats: {type: String, enum: ['Infinite', '1', '2', '3', '5']},
  tolerance: {type: String, enum: ['None', 'Low', 'Med', 'High']},
  speedIncrement: {type: Number, min: 1, max: 20},
  rewindAnimation: {type: Boolean},
  masterMode: {type: Boolean},
  autoContinue: {type: Boolean},
  showMistakes: {type: Boolean}

}, { _id: false });

var SongrecordSchema = new mongoose.Schema({
  songName: {type: String, required: true},
  artistName: {type: String, required: true},
  difficulty: {type: Number, min: 0, max: 100, required: true},
  speed: {type: Number, min: 0, max: 100, required: true},
  levelUp: {type: Boolean},
  accelerate: {type: Boolean},
  advancedSettings: [advancedSettingsSchema],
  dateCreated: {type: Date, required: true, default: Date.now}

});

registerEvents(SongrecordSchema);
export default mongoose.model('Songrecord', SongrecordSchema);
