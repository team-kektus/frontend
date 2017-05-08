export default function routing($stateProvider) {
  $stateProvider
    .state('login', {
      parent: 'public',
      url: '/login/',
      views: {
        '@': {
          template: require('./template.html'),
          controller: 'LoginController',
          controllerAs: 'ctrl'
        }
      }
    })
}

routing.$inject = ['$stateProvider']
