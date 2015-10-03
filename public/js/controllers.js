var xerorexControllers = angular.module('xerorexControllers', []);

xerorexControllers.controller('homeController', function ($scope, $http) {
	$http.get('public/data/homepage/carousel-items.json').success(function (data) {
		$scope.carousel = {
			items: data
		};
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
// Bluerays Controller
xerorexApp.controller('blueraysCtrl', function ($scope, $http, $sce) {
	$scope.toTrustedHtml = function (html) {
		return $sce.trustAsHtml(html);
	}
	$http.get('public/data/products/bluerays.json').success(function (data) {
		$scope.technology = data;
	});
});
// Cameras Controller
xerorexApp.controller('camerasCtrl', function ($scope, $http, $sce) {
	$scope.toTrustedHtml = function (html) {
		return $sce.trustAsHtml(html);
	}
	$http.get('public/data/products/cameras.json').success(function (data) {
		$scope.technology = data;
	});
});
// Computing Controller
xerorexApp.controller('computingCtrl', function ($scope, $http, $sce) {
	$scope.toTrustedHtml = function (html) {
		return $sce.trustAsHtml(html);
	}
	$http.get('public/data/devices/computing.json').success(function (data) {
		$scope.carousel = data.carousel;
		$scope.featurettes = data.featurettes;
		console.log(data);
	});
});
// Home Appliances Controller
xerorexControllers.controller('homeAppliancesCtrl', function ($scope, $http, $sce) {
	$scope.toTrustedHtml = function (html) {
		return $sce.trustAsHtml(html);
	}
	$http.get('public/data/products/homeAppliances.json').success(function (data) {
		$scope.technology = data;
	});
});
// Home Theater Controller
xerorexControllers.controller('homeTheaterCtrl', function ($scope, $http, $sce) {
	$scope.toTrustedHtml = function (html) {
		return $sce.trustAsHtml(html);
	}
	$http.get('public/data/products/homeTheater.json').success(function (data) {
		$scope.technology = data;
	});
});
// Televisions Controller
xerorexControllers.controller('televisionsCtrl', function ($scope, $http, $sce) {
	$scope.toTrustedHtml = function (html) {
		return $sce.trustAsHtml(html);
	}
	$http.get('public/data/products/televisions.json').success(function (data) {
		$scope.technology = data;
	});
});
// Laptops Controller
xerorexControllers.controller('laptopsCtrl', function ($scope, $http, $sce) {
	$scope.toTrustedHtml = function (html) {
		return $sce.trustAsHtml(html);
	}
	$http.get('public/data/products/laptops.json').success(function (data) {
		$scope.technology = data;
	});
});
