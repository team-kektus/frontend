angular.module('kektus')
  .config(function ($stateProvider) {
    $stateProvider
      .state('grading', {
        parent: 'protected-professor',
        url: '/grading/',
        views: {
          '': {
            templateUrl: 'grading/grading.template.html',
            controller: 'GradingController',
            controllerAs: 'ctrl'
          }
        }
      })
  })
