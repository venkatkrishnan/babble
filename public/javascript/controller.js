var mainApp = angular.module('mainApp', ['ngRoute']);

mainApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider.
    when('/', {
      templateUrl: 'pages/login.html',
      controller: 'loginController'
    }).
    when('/babble', {
      templateUrl: 'pages/babble.html',
      controller: 'babbleController'
    });
}]);
