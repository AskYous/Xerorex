var xerorexApp = angular.module('xerorexApp', [
	'ngRoute',
	'xerorexControllers',
	'xerorexDirectives'
]);

//routes
xerorexApp.config(['$routeProvider', function ($routeProvider) {
	// Home
	$routeProvider.when('/', {
		controller: 'homeController',
		templateUrl: 'public/html/homepage/index.html',
	})

	// Bluerays
	.when('/Bluerays', {
		templateUrl: 'public/html/shared/technology.html',
		controller: 'blueraysCtrl'
	})

	// Cameras
	.when('/Cameras', {
		templateUrl: 'public/html/shared/technology.html',
		controller: 'camerasCtrl'
	})

	// Home Appliances
	.when('/HomeAppliances', {
		templateUrl: 'public/html/shared/technology.html',
		controller: 'homeAppliancesCtrl'
	})

	// Home Theater
	.when('/HomeTheater', {
		templateUrl: 'public/html/shared/technology.html',
		controller: 'homeTheaterCtrl'
	})

	// Televisions
	.when('/Televisions', {
		templateUrl: 'public/html/shared/technology.html',
		controller: 'televisionsCtrl'
	})

	// Otherwise
	.otherwise({
		redirectTo: '/' //URL doesn't exist
	});
}]);
