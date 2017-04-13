angular.module('kektus', [
  'ui.router',
  'restangular',
  'kektus.components',
  'kektus.login',
  'kektus.account',
  'kektus.main',
  'kektus.grading',
])

angular.module('kektus')
  .config(function ($locationProvider, $urlRouterProvider, $stateProvider) {
    $locationProvider.html5Mode(true)

    $urlRouterProvider.otherwise('/')
  })

  .config(function (RestangularProvider) {
    RestangularProvider.setFullResponse(true)
    RestangularProvider
      .setBaseUrl('/api/v1')
      .setRequestSuffix('.json')
      .setDefaultHeaders({'Content-Type': 'application/json; charset=UTF-8'})
  })

  .run(function ($rootScope) {
    $rootScope.Layout = {
      'sidebar_is_closed': false
    }
  })
