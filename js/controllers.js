var xerorexApp = angular.module('xerorexApp', []);
xerorexApp.controller('navbarCtrl', function($scope){
	$scope.menuItems = [
	{
		title: 'Discover',
		href: '#/Discover'
	},{
		title: 'Products',
		href: '#/Products'
	}, {
		title: 'Apps',
		href: '#/Apps'
	}, {
		title: 'Support',
		href: '#/Support'
	}]
});