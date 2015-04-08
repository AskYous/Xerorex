var xerorexApp = angular.module('xerorexApp', [
	'ngRoute',
	'xerorexControllers'
]);

//routes
xerorexApp.config(['$routeProvider', function ($routeProvider) {
	$routeProvider.when('/home', {
		templateUrl: 'partials/homepage/index.html',
	}).when('/', {
		templateUrl: 'partials/homepage/index.html',
	}).when('/#', {
		templateUrl: 'partials/homepage/index.html',
	}).when('/Phones', {
		templateUrl: 'phones/index.html', //for future
		controller: 'PhoneCtrl'
	}).when('/TVs', {
		templateUrl: 'tvs/index.html', //for future
		controller: 'TvCtrl'
	})
	.otherwise({
		redirectTo: '/404' //URL doesn't exist
	});	
}]);