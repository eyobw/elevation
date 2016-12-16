'use strict';

angular
  .module('yourElevationApp', [
    'ngRoute'
  ])
  .config(function ($routeProvider, $locationProvider){
  	$routeProvider
  	.when('/', {
        templateUrl: 'views/search.html',
        controller: 'SearchCtrl'
      })
  	.when('/info', {
        templateUrl: 'views/info.html',
        controller: 'InfoCtrl'
      })
  	.otherwise({
        redirectTo: '/'
      });
  	$locationProvider.html5Mode({
  		enabled: true,
      requireBase: false
  	});
  });