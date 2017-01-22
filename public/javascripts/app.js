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
      templateUrl: 'templates/login.html'
    })

	$urlRouterProvider.otherwise('login');
}]);