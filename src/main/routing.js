export default function routing($stateProvider) {
  $stateProvider
    .state('main', {
      parent: 'protected',
      url: '/',
      views: {
        '': {
          template: require('./template.html'),
          controller: 'MainPageController',
          controllerAs: 'ctrl'
        }
      }
    })
}

routing.$inject = ['$stateProvider']
