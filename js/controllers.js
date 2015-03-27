var xerorexApp = angular.module('xerorexApp', []);

// Navbar Controller
xerorexApp.controller('navbarCtrl', function($scope){
	$scope.menuItems = [
	{
		title: 'Discover',
		href: '#/Discover'
	},{
		title: 'Products',
		href: '#/Products',
		menuItems: [{
			title: 'Phones',
			href: '#/Products/Phones'
		}, {
			title: 'Televisions',
			href: '#/Products/Televisions'
		}, {
			title: 'Wearables',
			href: '#/Products/Wearables'
		}]
	}, {
		title: 'Apps',
		href: '#/Apps'
	}, {
		title: 'Support',
		href: '#/Support'
	}]
});

// Carousel controller
xerorexApp.controller('carouselCtrl', function ($scope) {
	$scope.carouselItems = [{
			header: 'Televisions',
			description: 'Explore the future of picture quality with this 60" 3D UHD 4K Smart TV that features a 3840 x 2160 native resolution for viewing high-resolution content. You can even upscale lower resolution material to near-4K picture quality.',
			href: '#/Learn More',
			img: 'img/TV-4k-Curved.jpg',
			btnText: 'Learn more'			
		},{
			header: 'Notebooks',
			description: 'Boots in seconds. Nothing complicated to learn. Comes with your favorite Google apps. Built for everyday use and perfect for sharing with others. Starting at $199.',
			href: '#/Learn More',
			img: 'img/chromebook-hp-14.jpg',			
			btnText: 'Learn more'			
		},{
			header: 'Wearables',
			description: 'Android Wear organizes your information, suggests what you need, and shows it to you before you even ask. Get messages from your friends, meeting notifications, and weather updates at a glance.',
			href: '#/Learn More',
			img: 'img/wear.jpg',			
			btnText: 'Learn more'			
		}]
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
	}]
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
	}]
});