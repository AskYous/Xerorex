var xerorexApp = angular.module('xerorexApp', []);

// Navbar Controller
xerorexApp.controller('navbarCtrl', function ($scope, $http){
	$http.get('data/menu-items.json').success(function (data) {
		$scope.menuItems = data;
	});
});

// Carousel controller
xerorexApp.controller('carouselCtrl', function ($scope, $http) {
	$http.get('data/carousel-items.json').success(function (data) {
		$scope.carouselItems = data;
	});
})

// Marketing controller
xerorexApp.controller('marketingCtrl', function($scope, $http){
	$http.get('data/marketing-items.json').success(function (data) {
		$scope.marketingItems = data;
	});
});

//Fueturette Controller
xerorexApp.controller('featuretteCtrl', function($scope, $http){
	$http.get('data/featurette-items.json').success(function (data) {
		$scope.featuretteItems = data;
	});
});