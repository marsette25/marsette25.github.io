var app = angular.module('myapp', ['ngRoute', 'myapp.controllers']);

app.config(['$routeProvider', function($routeProvider){
	$routeProvider
		.when('/', {templateUrl:'partials/index', controller: 'IndexController'})
		.when('/about', {templateUrl:'partials/about', controller: 'AboutController'})
		.when('/needs', {templateUrl:'partials/needs', controller: 'NeedsController'})
		.when('/professional', {templateUrl:'partials/professional', controller: 'ProfessionalController'})
		.when('/portfolio', {templateUrl:'partials/portfolio', controller: 'PortfolioController'})
		.otherwise({redirectTo:'/'})
}])

.config(['$locationProvider', function($locationProvider){
	$locationProvider.html5Mode(true);
}]);