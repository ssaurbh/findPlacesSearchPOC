var landMark = angular.module('landMarkApp');

landMark.factory('imageLookup', ['$http',function($http) {
   var serviceObj = {};

    serviceObj.getImageURL = function(pattern){
    return $http.get("https://pixabay.com/api?key=5537510-1513f1715e0ed263b2b612efd&hp=&image_type=&cat=&min_width=&min_height=&q=" + pattern + "&order=popular")
     .then(function(response){ 
    var data = response.data;
      return data;
  });
    }

    return serviceObj;

}]);