/**
 * Songrecord model events
 */

'use strict';

import {EventEmitter} from 'events';
var SongrecordEvents = new EventEmitter();

// Set max event listeners (0 == unlimited)
SongrecordEvents.setMaxListeners(0);

// Model events
var events = {
  save: 'save',
  remove: 'remove'
};

// Register the event emitter to the model events
function registerEvents(Songrecord) {
  for(var e in events) {
    let event = events[e];
    Songrecord.post(e, emitEvent(event));
  }
}

function emitEvent(event) {
  return function(doc) {
    SongrecordEvents.emit(event + ':' + doc._id, doc);
    SongrecordEvents.emit(event, doc);
  };
}

export {registerEvents};
export default SongrecordEvents;
