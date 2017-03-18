angular.module('kektus')
  .config(function ($stateProvider) {
    $stateProvider
      .state('login', {
        parent: 'unprotected',
        url: '/login/',
        views: {
          '@': {
            templateUrl: 'login/login.template.html',
            controller: 'LoginController',
            controllerAs: 'ctrl'
          }
        }
      })
  })
