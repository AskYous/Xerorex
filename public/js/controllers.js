var xerorexControllers = angular.module('xerorexControllers', []);

xerorexControllers.controller('homeController', function ($scope, $http) {
	$http.get('public/data/homepage/carousel-items.json').success(function (data) {
		$scope.carouselItems = data;
	});
	$http.get('public/data/homepage/marketing-items.json').success(function (data) {
		$scope.marketingItems = data;
	});
	$http.get('public/data/homepage/featurette-items.json').success(function (data) {
		$scope.featurettes = data;
	});
});
// Site Controller
xerorexControllers.controller('siteController', function ($scope, $http) {
	$http.get('public/data/homepage/menu-items.json').success(function (data) {
		$scope.menuItems = data;
	});
})
// Televisions Controller
xerorexControllers.controller('televisionsCtrl', function ($scope, $http, $sce) {
	$scope.toTrustedHtml = function (html) {
		return $sce.trustAsHtml(html);
	}
	$http.get('public/data/products/televisions.json').success(function (data) {
		$scope.technology = data;
	});
});
// Home Appliances Controller
xerorexControllers.controller('homeAppliancesCtrl', function ($scope, $http, $sce) {
	$scope.toTrustedHtml = function (html) {
		return $sce.trustAsHtml(html);
	}
	$http.get('public/data/devices/homeAppliances.json').success(function (data) {
		$scope.carouselItems = data.carouselItems;
		$scope.featurettes = data.featurettes;
	});
});
