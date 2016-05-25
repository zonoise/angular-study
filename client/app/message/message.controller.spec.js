'use strict';

describe('Component: MessageComponent', function () {

  // load the controller's module
  beforeEach(module('myappApp'));

  var MessageComponent, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController, $rootScope) {
    scope = $rootScope.$new();
    MessageComponent = $componentController('MessageComponent', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
