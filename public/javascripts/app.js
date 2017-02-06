var app = angular.module('todolistc', ['ui.router']);

app.config(['$stateProvider','$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  $stateProvider
  	.state('home', {
  		url: '/home',
  		templateUrl: 'templates/home.html',
      controller: 'mainCtrl'
  	})
    .state('login', {
      url: '/login',
      templateUrl: 'templates/login.html',
      controller: 'mainCtrl'
    })
    .state('register', {
      url: '/register',
      templateUrl: 'templates/register.html',
      controller: 'mainCtrl'
    })
    .state('newcase', {
      url: '/newcase',
      templateUrl: 'templates/newcase.html',
      controller: 'mainCtrl'
    })

	$urlRouterProvider.otherwise('login');
}]);