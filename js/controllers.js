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
		}
		]
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
			header: 'First Item',
			description: 'This is a description',
			href: '#/Learn More',
			img: 'http://placehold.it/500x500',
			btnText: 'Learn more'			
		},{
			header: 'Second Item',
			description: 'This is a description',
			href: '#/Learn More',
			img: 'http://placehold.it/500x500',			
			btnText: 'Learn more'			
		},{
			header: 'Third Item',
			description: 'This is a description',
			href: '#/Learn More',
			img: 'http://placehold.it/500x500',			
			btnText: 'Learn more'			
		}]
})

// Marketing controller
xerorexApp.controller('marketingCtrl', function($scope){
	$scope.items = [{
		header: 'Heading1',
		img: 'http://placehold.it/140x140',
		description: 'Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna.',
		btnText: 'View details',
		href: '#/Marketing'
	},{
		header: 'Heading2',
		img: 'http://placehold.it/140x140',
		description: 'Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna.',
		btnText: 'View details',
		href: '#/Marketing'
	},{
		header: 'Heading3',
		img: 'http://placehold.it/140x140',
		description: 'Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna.',
		btnText: 'View details',
		href: '#/Marketing'
	}]
});

//Fueturette Controller
xerorexApp.controller('featuretteCtrl', function($scope){
	$scope.featurettes = [{
		header: 'First featurette heading.',
		subHeader: "It'll blow your mind.",
		description: 'Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.',
		img: 'http://placehold.it/400x400'
	},{
		header: "Oh yeah, it's that good.",
		subHeader: "See for yourself.",
		description: 'Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.',
		img: 'http://placehold.it/400x400'
	},{
		header: "And lastly, this one.",
		subHeader: "Checkmate.",
		description: 'Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.',
		img: 'http://placehold.it/400x400'
	},]
});