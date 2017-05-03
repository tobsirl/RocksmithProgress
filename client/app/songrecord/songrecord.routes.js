'use strict';

export default function($stateProvider) {
  'ngInject';
  $stateProvider
    .state('songrecord', {
      url: '/', // Changed from /songrecords to /
      template: '<songrecord></songrecord>'
    });
}
