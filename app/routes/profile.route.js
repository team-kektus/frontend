angular.module('kektus')
  .config(function ($stateProvider) {
    $stateProvider
      .state('profile', {
        url: '/profile',
        templateUrl: 'profile/profile.template.html',
        controller: 'ProfileController',
        controllerAs: 'ctrl'
      })
      .state('profile.dashboard', {
        url: '/dashboard',
        templateUrl: 'profile/dashboard/dashboard.template.html',
        controller: 'ProfileDashboardController',
        controllerAs: 'ctrl'
      })
      .state('profile.settings', {
        url: '/settings',
        templateUrl: 'profile/settings/settings.template.html',
        controller: 'ProfileSettingsController',
        controllerAs: 'ctrl'
      })
  })
