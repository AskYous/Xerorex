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

	// Televisions
	.when('/Televisions', {
		templateUrl: 'public/html/shared/technology.html',
		controller: 'televisionsCtrl'
	})

	// Televisions
	.when('/HomeAppliances', {
		templateUrl: 'public/html/shared/devices.html',
		controller: 'homeAppliancesCtrl'
	})

	// Otherwise
	.otherwise({
		redirectTo: '/' //URL doesn't exist
	});
}]);
