angular.module('kektus')
  .config(function ($stateProvider) {
    $stateProvider
      .state('teamsview', {
        abstract: true,
        parent: 'protected-professor',
        url: '/professor',
        views: {
          '': {
            templateUrl: 'teamsview/teamsview.template.html',
            controller: 'TeamsviewController',
            controllerAs: 'ctrl'
          }
        }
      })

      .state('teamsview.teams', {
        url: '/teams/',
        views: {
          '': {
            templateUrl: 'teamsview/children/teams.template.html',
            controller: 'TeamsProfessorController',
            controllerAs: 'ctrl'
          }
        }
      })

      .state('teamsview.createteam', {
        url: '/createteam/',
        views: {
          '': {
            templateUrl: 'teamsview/children/createteam.template.html',
            controller: 'CreateTeamProfessorController',
            controllerAs: 'ctrl'
          }
        }
      })
  })
