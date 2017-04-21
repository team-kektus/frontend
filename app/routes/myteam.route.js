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
        },
        resolve: {
          hasTeam: function (currentUser, $state) {
            if (!currentUser.team) {
              window.alert('You are not subscribed to any team. Ask professor to sign you into a team.')
              $state.go('root')
            }
          }
        }
      })

      .state('team.dashboard', {
        url: '/',
        views: {
          '': {
            templateUrl: 'myteam/children/dashboard.template.html',
          }
        }
      })

      .state('team.settings', {
        url: '/settings/',
        views: {
          '': {
            templateUrl: 'myteam/children/settings.template.html',
          }
        }
      })
  })
