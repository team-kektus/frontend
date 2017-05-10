export default function routing($stateProvider) {
  $stateProvider
    .state('teamsview', {
      abstract: true,
      parent: 'protected-professor',
      url: '/professor',
      views: {
        '': {
          template: require('./template.html'),
          controller: 'TeamsMainController',
          controllerAs: 'ctrl'
        }
      }
    })

    .state('teamsview.teams', {
      url: '/teams/',
      views: {
        '': {
          template: require('./children/teams.template.html'),
          controller: 'TeamsProfessorController',
          controllerAs: 'ctrl'
        }
      }
    })

    .state('teamsview.createteam', {
      url: '/createteam/',
      views: {
        '': {
          template: require('./children/createteam.template.html'),
          controller: 'CreateTeamProfessorController',
          controllerAs: 'ctrl'
        }
      }
    })
}

routing.$inject = ['$stateProvider']
