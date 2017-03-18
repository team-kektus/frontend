angular.module('kektus')
  .config(function ($stateProvider) {
    $stateProvider
      .state('main', {
        parent: 'protected',
        url: '/',
        views: {
          '': {
            templateUrl: 'main/main.template.html',
            controller: 'MainPageController',
            controllerAs: 'ctrl'
          }
        }
      })
  })
