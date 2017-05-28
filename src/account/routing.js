export default function routing($stateProvider) {
  $stateProvider
    .state('account', {
      parent: 'protected',
      url: '/account/',
      views: {
        '': {
          template: require('./template.html'),
          controller: 'AccountController',
          controllerAs: 'ctrl'
        }
      }
    })
}

routing.$inject = ['$stateProvider']
