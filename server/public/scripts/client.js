console.log(data);

var myApp = angular.module('myApp', []);

myApp.controller('ListingsController', ['$scope', function($scope) {
  $scope.listings = data;

  $scope.removeListing = function(index) {
    console.log(index);
    $scope.listings.splice(index, 1);
  };
}]);
