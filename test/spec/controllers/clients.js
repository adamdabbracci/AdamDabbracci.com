'use strict';

describe('Controller: ClientsCtrl', function () {

  // load the controller's module
  beforeEach(module('adamdabbracciApp'));

  var ClientsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ClientsCtrl = $controller('ClientsCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ClientsCtrl.awesomeThings.length).toBe(3);
  });
});
