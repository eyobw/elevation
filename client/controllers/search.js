'use strict';

angular.module('yourElevationApp')
  .controller('SearchCtrl', ['$scope', '$templateCache', 'DataProvider', function ($scope, $templateCache, DataProvider) {

  

  	$scope.getElevation = function(lat, lng){
  		//Latitude(-90,90) and Longitude should be between(-180, 180)
  		$scope.message = '';
  		if(lat >= -90 && lat <= 90 && lng >= -180 && lng <= 180){
  			DataProvider.getData(lat, lng).then(function(response){
  				$scope.data = response.data;
  				console.log(response.data);
  			})
  		}else{
  		    	$scope.message = 'Latitude and Longitude values should be between -180, 180';
  		    	$scope.data = null;
  		    }
  	};

  		
  }]);