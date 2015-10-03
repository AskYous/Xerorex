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

	// Computing
	.when('/Computing', {
		templateUrl: 'public/html/shared/devices.html',
		controller: 'computingCtrl'
	})

	// Laptops
	.when('/Computing/Laptops', {
		templateUrl: 'public/html/shared/technology.html',
		controller: 'laptopsCtrl'
	})

	// Laptops
	.when('/Computing/Desktops', {
		templateUrl: 'public/html/shared/technology.html',
		controller: 'desktopsCtrl'
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

	// Laptops
	.when('/Laptops', {
		templateUrl: 'public/html/shared/technology.html',
		controller: 'laptopsCtrl'
	})

	// Otherwise
	.otherwise({
		redirectTo: '/' //URL doesn't exist
	});
}]);
