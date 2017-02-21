angular.module('kektus')
  .config(function ($stateProvider) {
    $stateProvider
      .state('signup', {
        url: '/signup',
        views: {
          '@': {
            templateUrl: 'signup/signup.template.html',
            controller: 'SignupController',
            controllerAs: 'ctrl'
          }
        }
      })
      .state('login', {
        url: '/login',
        views: {
          '@': {
            templateUrl: 'login/login.template.html',
            controller: 'LoginController',
            controllerAs: 'ctrl'
          }
        }
      })
  })
