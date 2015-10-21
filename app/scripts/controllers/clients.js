'use strict';

/**
 * @ngdoc function
 * @name adamdabbracciApp.controller:ClientsCtrl
 * @description
 * # ClientsCtrl
 * Controller of the adamdabbracciApp
 */
angular.module('adamdabbracciApp')
  .controller('ClientsCtrl', function ($scope, $location, $routeParams, clientsFactory) {
    var clientID = $routeParams.id;
    if (clientID === undefined)
    {
      $location.path('/');
    }
    
    
    //get porfolio item
    $scope.client = clientsFactory.getPortfolioItem(clientID);
    
    if ($scope.client === null)
    {
      $location.path('/');      
    }
    
    //get count
    $scope.count = clientsFactory.getPortfolioSize();
    
    
    
  });
