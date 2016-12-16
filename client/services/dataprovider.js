'use strict'


//Factory  with cache so that it wouldn't make same API request twice.
angular.module('yourElevationApp')
  .factory('DataProvider',['$q', '$http', function ($q, $http) {
  	return {
  		getData : function(lat, lng){
  			 
  				var defer = $q.defer();
  			  	var url = 'api/elevation?lat='+lat+'&lng='+lng;
  			
  			  	$http({method:'GET', url: url, cache: 'true'})
  			    .then(function(data) {
  			        defer.resolve(data);
  			    });
  			
  			    return defer.promise;
  			
  		}
  	}

  }]);