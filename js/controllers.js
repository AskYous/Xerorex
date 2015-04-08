var xerorexControllers = angular.module('xerorexControllers', []);

// Navbar Controller
xerorexControllers.controller('navbarCtrl', function ($scope, $http){
	$http.get('data/menu-items.json').success(function (data) {
		$scope.menuItems = data;
	});
});

// Carousel controller
xerorexControllers.controller('carouselCtrl', function ($scope, $http) {
	$http.get('data/carousel-items.json').success(function (data) {
		$scope.carouselItems = data;
	});
})

// Marketing controller
xerorexControllers.controller('marketingCtrl', function($scope, $http){
	$http.get('data/marketing-items.json').success(function (data) {
		$scope.marketingItems = data;
	});
});

//Fueturette Controller
xerorexControllers.controller('featuretteCtrl', function($scope, $http){
	$http.get('data/featurette-items.json').success(function (data) {
		$scope.featuretteItems = data;
	});
});