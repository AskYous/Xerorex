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

	// Bluerays
	.when('/Cameras', {
		templateUrl: 'public/html/shared/technology.html',
		controller: 'camerasCtrl'
	})

	// Home Appliances
	.when('/HomeAppliances', {
		templateUrl: 'public/html/shared/devices.html',
		controller: 'homeAppliancesCtrl'
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
