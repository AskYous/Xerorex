var xerorexApp = angular.module('xerorexApp', [
	'ngRoute',
	'xerorexControllers'
]);

//routes
xerorexApp.config(['$routeProvider', function ($routeProvider) {
	$routeProvider.when('/home', {
		templateUrl: 'public/html/homepage/index.html',
	}).when('/', {
		templateUrl: 'public/html/homepage/index.html',
	}).when('/#', {
		templateUrl: 'public/html/homepage/index.html',
	}).when('/Phones', {
		templateUrl: 'public/phones/index.html', //for future
		controller: 'PhoneCtrl'
	}).when('/Televisions', {
		templateUrl: 'public/html/televisions/index.html', //for future
		controller: 'televisionsCtrl'
	})
	.otherwise({
		redirectTo: '/404' //URL doesn't exist
	});
}]);
