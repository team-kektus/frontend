angular.module('kektus')
  .config(function ($stateProvider) {
    $stateProvider
      .state('team', {
        abstract: true,
        parent: 'protected',
        url: '/team',
        redirectTo: 'team.dashboard',
        views: {
          '': {
            templateUrl: 'myteam/myteam.template.html',
            controller: 'MyTeamController',
            controllerAs: 'ctrl'
          }
        }
      })

      .state('team.dashboard', {
        parent: 'team',
        url: '',
        views: {
          '': {
            templateUrl: 'myteam/children/dashboard.template.html',
          }
        }
      })

      .state('team.settings', {
        parent: 'team',
        url: '/settings',
        views: {
          '': {
            templateUrl: 'myteam/children/settings.template.html',
          }
        }
      })
  })
