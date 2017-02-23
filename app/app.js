angular.module('kektus', [
  'ui.router',
  'kektus.components',
  'kektus.signup',
  'kektus.login',
])

angular.module('kektus')
  .config(function ($locationProvider, $urlRouterProvider, $stateProvider) {
    $locationProvider.html5Mode(true)

    $urlRouterProvider.otherwise('/')
  })
