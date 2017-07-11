var landMark = angular.module('landMarkApp');

landMark.factory('placeLookup', ['$http',function($http) {
   var serviceObj = {};

    serviceObj.getPlaces = function(pattern){
    return $http.get("http://api.geonames.org/search?q=" + pattern + "&maxRows=10&username=ssaurbh")
     .then(function(response){ 
    var data = response.data;
      return data;
  });
    }

    return serviceObj;

}]);