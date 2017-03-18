angular.module('kektus')
  .config(function ($stateProvider) {
    $stateProvider
      .state('login', {
        parent: 'public',
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
