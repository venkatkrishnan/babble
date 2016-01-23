var mainApp = angular.module('mainApp', ['ngRoute']);

angular.module('mainApp').controller('loginController', function($scope) {
  $scope.message = "You are in login page";
});

angular.module('mainApp').controller('chatController', function($http,$rootScope) {

  $http.get('/chats').success(function successCallback(data){
    //console.log(data);
    var chatDataItems=[];
      
    angular.forEach(data,function(value,key){
        var chatData={};
        chatData.reciever=value.reciever;
        chatData.sender=value.sender;
        chatData.message=value.message;
        chatData.timestamp=Date();
        chatDataItems.push(chatData);
});
      
    console.log(chatDataItems);
    $rootScope.chatItems=chatDataItems;

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

angular.module('mainApp').controller('favFriendsCtrl',function($http,$rootScope){
    
});
