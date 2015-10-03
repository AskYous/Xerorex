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
	.when('/LED', {
		templateUrl: 'public/html/shared/technology.html',
		controller: 'ledCtrl'
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

	// Laptops
	.when('/Laptops', {
		templateUrl: 'public/html/shared/technology.html',
		controller: 'memoryCtrl'
	})

	// Memory
	.when('/Memory', {
		templateUrl: 'public/html/shared/technology.html',
		controller: 'memoryCtrl'
	})

	// Phones
	.when('/Phones', {
		templateUrl: 'public/html/shared/technology.html',
		controller: 'phonesCtrl'
	})

	// Tablets
	.when('/Tablets', {
		templateUrl: 'public/html/shared/technology.html',
		controller: 'tabletsCtrl'
	})

	// Televisions
	.when('/Televisions', {
		templateUrl: 'public/html/shared/technology.html',
		controller: 'televisionsCtrl'
	})

	// Security
	.when('/Security', {
		templateUrl: 'public/html/shared/technology.html',
		controller: 'securityCtrl'
	})

	// Otherwise
	.otherwise({
		redirectTo: '/' //URL doesn't exist
	});
}]);
