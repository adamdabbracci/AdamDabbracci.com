'use strict';

describe('Service: clientsFactory', function () {

  // load the service's module
  beforeEach(module('adamdabbracciApp'));

  // instantiate service
  var clientsFactory;
  beforeEach(inject(function (_clientsFactory_) {
    clientsFactory = _clientsFactory_;
  }));

  it('should do something', function () {
    expect(!!clientsFactory).toBe(true);
  });

});
