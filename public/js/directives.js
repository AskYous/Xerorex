var xerorexDirectives = angular.module('xerorexDirectives', []);

xerorexControllers.directive('carousel', function () {
  return {
    templateUrl: 'public/html/shared/carousel.html?v=1'
  }
});
xerorexControllers.directive('featurettes', function () {
  return {
    templateUrl: 'public/html/shared/featurettes.html?v=1'
  }
});
xerorexControllers.directive('marketing', function () {
  return {
    templateUrl: 'public/html/shared/marketing.html?v=1'
  }
});
