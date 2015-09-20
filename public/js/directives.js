var xerorexDirectives = angular.module('xerorexDirectives', []);

xerorexControllers.directive('carousel', function () {
  return {
    templateUrl: 'public/html/shared/carousel.html'
  }
});
xerorexControllers.directive('featurettes', function () {
  return {
    templateUrl: 'public/html/shared/featurettes.html'
  }
});
xerorexControllers.directive('marketing', function () {
  return {
    templateUrl: 'public/html/shared/marketing.html'
  }
});
