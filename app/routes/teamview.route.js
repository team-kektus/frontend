angular.module('kektus')
  .config(function ($stateProvider) {
    $stateProvider
      .state('teamview', {
        parent: 'protected-professor',
        url: '/teamview/',
        views: {
          '': {
            templateUrl: 'teamview/teamview.template.html',
            controller: 'TeamviewController',
            controllerAs: 'ctrl'
          }
        }
      })
  })
