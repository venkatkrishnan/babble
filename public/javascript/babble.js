angular.module('mainApp').controller('babbleController', function($scope, $http) {
//  $scope.message = "You are in babble page";
  $http.get('data/data.js').success(function(data) {
    $scope.message = data;
  });
});
