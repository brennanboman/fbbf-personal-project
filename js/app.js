angular.module('fbbf', ['ui.router'])
  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
          .state('landing', {
            url: '/',
            templateUrl: 'views/landing.html'
          })
          .state('signup', {
            url: '/signup',
            templateUrl: 'views/signup.html'
          })
          .state('login', {
            url: '/login',
            templateUrl: 'views/login.html'
          })
          .state('createorjoin', {
            url: '/createorjoin',
            templateUrl: 'views/createorjoin.html'
          })
          .state('creategroup', {
            url: '/creategroup',
            templateUrl: 'views/creategroup.html'
          })
          .state('joingroup', {
            url: '/joingroup',
            templateUrl: 'views/joingroup.html'
          })
          .state('grouppage', {
            url: '/grouppage',
            templateUrl: 'views/grouppage.html'
          })
          .state('home', {
            url: '/home',
            templateUrl: 'views/home.html'
          })

          $urlRouterProvider
      .otherwise('/');
});
