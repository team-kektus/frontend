angular.module('kektus')
  .config(function ($stateProvider) {
    $stateProvider
      .state('teamsview', {
        parent: 'protected-professor',
        url: '/teamsview/',
        views: {
          '': {
            templateUrl: 'teamsview/teamsview.template.html',
            controller: 'TeamsviewController',
            controllerAs: 'ctrl'
          }
        }
      })
  })
