angular.module('kektus')
  .config(function ($stateProvider) {
    $stateProvider
      .state('profile', {
        url: '/profile',
        views: {
          '@': {
            templateUrl: 'profile/profile.template.html',
            controller: 'ProfileController',
            controllerAs: 'ctrl'
          }
        }
      })
  })
