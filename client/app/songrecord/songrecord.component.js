'use strict';
const angular = require('angular');

const uiRouter = require('angular-ui-router');

import routes from './songrecord.routes';

export class SongrecordComponent {
  /*@ngInject*/
  constructor() {
    this.message = 'Hello';
  }
}

export default angular.module('rocksmithProgressApp.songrecord', [uiRouter])
  .config(routes)
  .component('songrecord', {
    template: require('./songrecord.html'),
    controller: SongrecordComponent,
    controllerAs: 'songrecordCtrl'
  })
  .name;
