angular.module('kektus')
  .config(function ($stateProvider) {
    $stateProvider
      .state('account', {
        parent: 'protected',
        url: '/account/',
        views: {
          '': {
            templateUrl: 'account/account.template.html',
            controller: 'AccountController',
            controllerAs: 'ctrl'
          }
        }
      })
  })