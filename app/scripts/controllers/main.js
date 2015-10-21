'use strict';

/**
 * @ngdoc function
 * @name adamdabbracciApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the adamdabbracciApp
 */
angular.module('adamdabbracciApp')
  .controller('MainCtrl', function ($scope, clientsFactory) {
    
    //get the porfolio
    $scope.portfolio = clientsFactory.getPortfolioWithLimit(4);
    
    
  });
