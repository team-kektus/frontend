angular.module('kektus')
  .config(function ($stateProvider) {
    $stateProvider
      .state('teamsview', {
        parent: 'protected-professor',
        url: '/teams/',
        views: {
          '': {
            templateUrl: 'teamsview/teamsview.template.html',
            controller: 'TeamsviewController',
            controllerAs: 'ctrl'
          }
        }
      })
  })
