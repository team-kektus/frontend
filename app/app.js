angular.module('kektus', [
  'ui.router',
  'restangular',
  'kektus.components',
  'kektus.login',
])

angular.module('kektus')
  .config(function ($locationProvider, $urlRouterProvider, $stateProvider) {
    $locationProvider.html5Mode(true)

    $urlRouterProvider.otherwise('/login')
  })

  .config(function (RestangularProvider) {
    RestangularProvider.setFullResponse(true)
    RestangularProvider
      .setBaseUrl('api/v1')
      .setRequestSuffix('.json')
      .setDefaultHeaders({'Content-Type': 'application/json; charset=UTF-8'})
  })
