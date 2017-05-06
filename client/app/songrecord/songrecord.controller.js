'use strict';
const angular = require('angular');

/*@ngInject*/
export function songrecordController() {
  this.message = 'Hello';
}

export default angular.module('rocksmithProgressApp.songrecord', [])
  .controller('SongrecordController', songrecordController)
  .name;
