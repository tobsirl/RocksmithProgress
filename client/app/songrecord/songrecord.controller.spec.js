'use strict';

describe('Controller: SongrecordCtrl', function() {
  // load the controller's module
  beforeEach(module('rocksmithProgressApp.songrecord'));

  var SongrecordCtrl;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($controller) {
    SongrecordCtrl = $controller('SongrecordCtrl', {});
  }));

  it('should ...', function() {
    1.should.equal(1);
  });
});
