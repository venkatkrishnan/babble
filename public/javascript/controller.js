var mainApp = angular.module('mainApp', ['ngRoute']);

angular.module('mainApp').controller('loginController', function($scope) {
  $scope.message = "You are in login page";
});

angular.module('mainApp').controller('chatController', function($http,$rootScope) {
    $rootScope.sender='Arun';
  $http.get('/chats').success(function successCallback(data){
    alert(data);
    $rootScope.reciever=data.reciever;
    $rootScope.message=data.message;
    $rootScope.timestamp=Date();
    $rootScope.sender=data.sender;
  });
});

mainApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider.
    when('/', {
      templateUrl: 'pages/login.html'
    }).
    when('/babble', {
      templateUrl: 'pages/babble.html'
    });
}]);
