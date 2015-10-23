var xerorexControllers = angular.module('xerorexControllers', []);
// Home Controller
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
// About Controller
xerorexControllers.controller('aboutCtrl', function ($scope) {
	$scope.view = {
		"title": {
			"title": "Xerorex",
			"subtitle": "Building a better world, today."
		},
		"description": {
			"sections": [{
				"title": "About Xerorex",
				"paragraphs": [
					"For decades wonderful new products have been made by our manufacturing machine. Today, we pride ourselves in doing our part to make the world a better place. We bring our global customers the latest products made through innovation and bright ideas. Our diverse business platforms span consumer electronics, technology, software applications, medicinal devices, digital media, home appliances, fashion, and the latest wearable health devices.",
					"Through living the experience of life ourselves, our talented workforce works hard on innovative ideas and beautiful products, using reliable partners to push life into new dimensions, and allow our customers to experience the world."
				]
			}, {
				"title": "XeroreX Philosophy",
				"paragraphs": [
					"Based on our love for humanity, high standards for human ethics and the feeling of shared responsibility, we strive to become the ideal global citizen corporation.",
					"Our workforce is our pillar of excellence, our customers are our pillars to success, and our partners are our pillar to make the connection between the two.",
					"Our workforce brings things to life and brings happiness to our customers. Talented employees feel at home and they go to work for our customers on daily basis. Our employees are empowered to serve our customers.",
					"We follow a simple and clear strategy that if we build a product, we build it great the first time."
				]
			}, {
				"title": "XeroreX Values",
				"paragraphs": [
					"Integrity, Innovation, Excellence, High quality, and the sky is no limit."
				]
			}, {
				"title": "XeroreX Vision",
				"paragraphs": [
					"XeroreX builds innovative products that enhance people’s lives. Making a profit is only a side effect of that."
				]
			}, {
				"title": "XeroreX Performance",
				"paragraphs": [
					"Is measured by our customers’ love for our products."
				]
			}, {
				"title": "XeroreX History",
				"paragraphs": [
					"Three decades of innovation, invention, and manufacturing experience."
				]
			}, {
				"title": "XeroreX Vision 2020",
				"paragraphs": [
					"Let our customers propel us to the front by building them innovative products they need for a better and happier life."
				]
			}]
		}
	};
})
// Site Controller
xerorexControllers.controller('siteController', function ($scope, $http) {
	$http.get('public/data/homepage/menu-items.json').success(function (data) {
		$scope.menuItems = data;
	});
});
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
// Desktops Controller
xerorexControllers.controller('desktopsCtrl', function ($scope, $http, $sce) {
	$scope.toTrustedHtml = function (html) {
		return $sce.trustAsHtml(html);
	}
	$http.get('public/data/products/desktops.json').success(function (data) {
		$scope.technology = data;
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
// Laptops Controller
xerorexControllers.controller('laptopsCtrl', function ($scope, $http, $sce) {
	$scope.toTrustedHtml = function (html) {
		return $sce.trustAsHtml(html);
	}
	$http.get('public/data/products/laptops.json').success(function (data) {
		$scope.technology = data;
	});
});
// Led Controller
xerorexControllers.controller('ledCtrl', function ($scope, $http, $sce) {
	$scope.toTrustedHtml = function (html) {
		return $sce.trustAsHtml(html);
	}
	$http.get('public/data/products/led.json').success(function (data) {
		$scope.technology = data;
	});
});
// Memory Controller
xerorexControllers.controller('memoryCtrl', function ($scope, $http, $sce) {
	$scope.toTrustedHtml = function (html) {
		return $sce.trustAsHtml(html);
	}
	$http.get('public/data/products/memory.json').success(function (data) {
		$scope.technology = data;
	});
});
// Phones Controller
xerorexControllers.controller('phonesCtrl', function ($scope, $http, $sce) {
	$scope.toTrustedHtml = function (html) {
		return $sce.trustAsHtml(html);
	}
	$http.get('public/data/products/phones.json').success(function (data) {
		$scope.technology = data;
	});
});
// Tablets Controller
xerorexControllers.controller('tabletsCtrl', function ($scope, $http, $sce) {
	$scope.toTrustedHtml = function (html) {
		return $sce.trustAsHtml(html);
	}
	$http.get('public/data/products/tablets.json').success(function (data) {
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
// Security Controller
xerorexControllers.controller('securityCtrl', function ($scope, $http, $sce) {
	$scope.toTrustedHtml = function (html) {
		return $sce.trustAsHtml(html);
	}
	$http.get('public/data/products/security.json').success(function (data) {
		$scope.technology = data;
	});
});
// Security Controller
xerorexControllers.controller('wearablesCtrl', function ($scope, $http, $sce) {
	$scope.toTrustedHtml = function (html) {
		return $sce.trustAsHtml(html);
	}
	$http.get('public/data/products/wearables.json').success(function (data) {
		$scope.technology = data;
	});
});
