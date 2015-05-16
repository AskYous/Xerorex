var xerorexControllers = angular.module('xerorexControllers', []);

// Navbar Controller
xerorexControllers.controller('navbarCtrl', function ($scope, $http){
	$http.get('data/homepage/menu-items.json').success(function (data) {
		$scope.menuItems = data;
	});
});

// Carousel controller
xerorexControllers.controller('carouselCtrl', function ($scope, $http) {
	$http.get('data/homepage/carousel-items.json').success(function (data) {
		$scope.carouselItems = data;
	});
})

// Marketing controller
xerorexControllers.controller('marketingCtrl', function($scope, $http){
	$http.get('data/homepage/marketing-items.json').success(function (data) {
		$scope.marketingItems = data;
	});
});

//Fueturette Controller
xerorexControllers.controller('featuretteCtrl', function($scope, $http){
	$http.get('data/homepage/featurette-items.json').success(function (data) {
		$scope.featuretteItems = data;
	});
});