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
xerorexApp.controller('marketingCtrl', function($scope){
	$scope.items = [{
		header: 'Notebooks',
		img: 'img/chromebook-pixel.png',
		description: 'Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna.',
		btnText: 'View details',
		href: '#/Marketing'
	},{
		header: 'Mobile',
		img: 'img/nexus-6.png',
		description: 'Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna.',
		btnText: 'View details',
		href: '#/Marketing'
	},{
		header: 'Tablets',
		img: 'img/nexus-7.png',
		description: 'Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna.',
		btnText: 'View details',
		href: '#/Marketing'
	}];
});

//Fueturette Controller
xerorexApp.controller('featuretteCtrl', function($scope){
	$scope.featurettes = [{
		header: 'Say hello to the new thermostat.',
		subHeader: "Goodbye old devices.",
		description: 'Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.',
		img: 'img/nest.png'
	},{
		header: "Oh yeah, it's that good.",
		subHeader: "See for yourself.",
		description: 'Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.',
		img: 'img/nexus-6.png'
	},{
		header: "And lastly, this one.",
		subHeader: "Checkmate.",
		description: 'Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.',
		img: 'img/chromebook-pixel.png'
	}];
});