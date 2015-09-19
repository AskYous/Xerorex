var xerorexControllers = angular.module('xerorexControllers', []);

// Technology Controller
xerorexControllers.controller('technologyCtrl', function($scope, $routeParams, $http){
	var technology = $routeParams.technology;

	$http.get('public/data/shared/technologies.json').success(function(data){
		technology = data.filter(function(t){ return t.title.toLowerCase() === technology.toLowerCase()})[0];
		$scope.technology = technology;
	});
});

// Navbar Controller
xerorexControllers.controller('navbarCtrl', function ($scope, $http) {
	$http.get('public/data/homepage/menu-items.json').success(function (data) {
		$scope.menuItems = data;
	});
});

// Carousel controller
xerorexControllers.controller('carouselCtrl', function ($scope, $http) {
	$http.get('public/data/homepage/carousel-items.json').success(function (data) {
		$scope.carouselItems = data;
	});
});

// Marketing controller
xerorexControllers.controller('marketingCtrl', function ($scope, $http) {
	$http.get('public/data/homepage/marketing-items.json').success(function (data) {
		$scope.marketingItems = data;
	});
});

// Fueturette Controller
xerorexControllers.controller('featuretteCtrl', function ($scope, $http) {
	$http.get('public/data/homepage/featurette-items.json').success(function (data) {
		$scope.featuretteItems = data;
	});
});

// Televisions Controller
xerorexControllers.controller('televisionsCtrl', function ($scope, $http) {
	$http.get('public/data/products/televisions.json').success(function (televisions) {
		var televisionsSorted = televisions.sort(function (a, b) { return b.releaseMonth - a.releaseMonth; })
		.sort(function (a, b) { return b.releaseYear - a.releaseYear; });
		$scope.televisions = televisionsSorted;
		$scope.newest = televisionsSorted[0];

		var sizes = [];
		televisionsSorted.forEach(function(tv){
			if(sizes.indexOf(tv.inches) == -1){
				sizes.push(tv.inches);
			}
		});
		sizes = sizes.sort();
		$scope.sizes = sizes;
	});
});
