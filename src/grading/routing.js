export default function routing($stateProvider) {
  $stateProvider
    .state('grading', {
      parent: 'protected-professor',
      url: '/grading/',
      views: {
        '': {
          template: require('./template.html'),
          controller: 'GradingController',
          controllerAs: 'ctrl'
        }
      }
    })
}

routing.$inject = ['$stateProvider']
