angular.module('kektus', [
  'ui.router',
  'ui.select',
  'restangular',
  'kektus.components',
  'kektus.login',
  'kektus.account',
  'kektus.main',
  'kektus.grading',
  'kektus.teamsview',
  'kektus.myteam',
  'kektus.admin',
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

  .run(function ($rootScope, $window) {
    $rootScope.Layout = {
      'sidebar_is_closed': true
    }

    // Uses Cors-Anywhere to make cors requests to servers where CORS Access-Control-Allow-Origin is not present.
    $.ajaxPrefilter( function (options) {
      if (options.crossDomain && jQuery.support.cors) {
        var http = (window.location.protocol === 'http:' ? 'http:' : 'https:');
        options.url = http + '//cors-anywhere.herokuapp.com/' + options.url;
        //options.url = "http://cors.corsproxy.io/url=" + options.url;
      }
    })

  })
