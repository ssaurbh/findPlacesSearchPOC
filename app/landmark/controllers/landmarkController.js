angular.module('landMarkApp').controller('landmarkController', ['$scope', 'imageLookup','placeLookup',function($scope, imageLookup,placeLookup){

	var items = [];
	$scope.items = items;
  $scope.date = new Date();

	 $scope.addToList = function(){

    // var isValid = filterRequestBeforeAdding();
      
    var data = imageLookup.getImageURL($scope.newItem);
    data.then(function(retData){
        if(retData.hits.length > 1 && retData.hits[0].webformatURL){
          $scope.items.push({'title':$scope.newItem,'path':retData.hits[0].webformatURL,'arrTime':new Date()});
            $scope.newItem = '';
        }else{

          $scope.newItem = 'Landmark could not be found. Please retry!!!';
        }
    })
   }

    function filterRequestBeforeAdding(){
        var data =placeLookup.getPlaces($scope.newItem); 
        data.then(function(retData){
       console.log(retData);     
     
    })
 }

    var commands = {
      'show me *val' : function(val){
        $scope.newItem = val;
        $scope.addToList();
        $scope.$apply();
      }
    }

    annyang.addCommands(commands);
    annyang.debug();
    annyang.start();
}]);


