export default function routing($stateProvider) {
  $stateProvider
    .state('admin', {
      abstract: true,
      parent: 'protected-admin',
      url: '/admin',
      redirectTo: 'admin.dashboard',
      views: {
        '': {
          template: require('./template.html'),
          controller: 'AdminController',
          controllerAs: 'ctrl'
        }
      }
    })

    .state('admin.dashboard', {
      url: '/',
      views: {
        '': {
          template: require('./children/dashboard.template.html'),
        }
      }
    })

    .state('admin.users', {
      url: '/',
      views: {
        '': {
          template: require('./children/users.template.html'),
          controller: 'UsersAdminController',
          controllerAs: 'ctrl'
        }
      }
    })
}

routing.$inject = ['$stateProvider']
