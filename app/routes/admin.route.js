angular.module('kektus')
  .config(function ($stateProvider) {
    $stateProvider
      .state('admin', {
        abstract: true,
        parent: 'protected-admin',
        url: '/admin',
        redirectTo: 'admin.dashboard',
        views: {
          '': {
            templateUrl: 'admin/admin.template.html',
            controller: 'AdminController',
            controllerAs: 'ctrl'
          }
        }
      })

      .state('admin.dashboard', {
        url: '/',
        views: {
          '': {
            templateUrl: 'admin/children/dashboard.template.html',
          }
        }
      })

      .state('admin.users', {
        url: '/',
        views: {
          '': {
            templateUrl: 'admin/children/users.template.html',
            controller: 'UsersAdminController',
            controllerAs: 'ctrl'
          }
        }
      })
  })
