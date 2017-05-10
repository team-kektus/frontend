export default function routing($stateProvider) {
  $stateProvider
    .state('team', {
      abstract: true,
      parent: 'protected',
      url: '/team',
      redirectTo: 'team.dashboard',
      views: {
        '': {
          template: require('./template.html'),
          controller: 'MyTeamController',
          controllerAs: 'ctrl'
        }
      },
      resolve: {
        hasTeam: ['currentUser', '$state', function (currentUser, $state) {
          this.$inject = ['currentUser', '$state']

          if (!currentUser.team) {
            window.alert('You are not subscribed to any team. Ask professor to sign you into a team.')
            $state.go('root')
          }
        }]
      }
    })

    .state('team.dashboard', {
      url: '/',
      views: {
        '': {
          template: require('./children/dashboard.template.html'),
        }
      }
    })

    .state('team.settings', {
      url: '/settings/',
      views: {
        '': {
          template: require('./children/settings.template.html'),
        }
      }
    })
}

routing.$inject = ['$stateProvider']
