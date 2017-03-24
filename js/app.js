angular.module('personalProj', ['ui.router'])
  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
          .state('landing', {
            url: '/',
            templateUrl: 'views/landing.html'
          })

          $urlRouterProvider
      .otherwise('/');
});
