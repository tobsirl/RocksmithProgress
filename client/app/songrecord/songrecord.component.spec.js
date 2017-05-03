'use strict';

describe('Component: SongrecordComponent', function() {
  // load the controller's module
  beforeEach(module('rocksmithProgressApp.songrecord'));

  var SongrecordComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($componentController) {
    SongrecordComponent = $componentController('songrecord', {});
  }));

  it('should ...', function() {
    1.should.equal(1);
  });
});
