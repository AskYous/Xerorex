var xerorexApp = angular.module('xerorexApp', [
	'ngRoute',
	'xerorexControllers'
]);

//routes
xerorexApp.config(['$routeProvider', function ($routeProvider) {
	// Home
	$routeProvider.when('/home', {
		templateUrl: 'public/html/homepage/index.html',
	})

	// Home
	.when('/', {
		templateUrl: 'public/html/homepage/index.html',
	})

	// Home
	.when('/#', {
		templateUrl: 'public/html/homepage/index.html',
	})

	// Televisions
	.when('/Televisions', {
		templateUrl: 'public/html/shared/technology.html',
		controller: 'televisionsCtrl'
	})

	// Technology
	.when('/:technology', {
		templateUrl: 'public/html/shared/technology.html',
		controller: 'technologyCtrl'
	})

	// Otherwise
	.otherwise({
		redirectTo: '/404' //URL doesn't exist
	});
}]);
