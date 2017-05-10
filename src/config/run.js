export default function RunConfig($rootScope, $window, $state) {
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

  $rootScope.$on('$stateChangeStart', function(evt, to, params) {
    if (to.redirectTo) {
      evt.preventDefault();
      $state.go(to.redirectTo, params, {location: 'replace'})
    }
  })
}

RunConfig.$inject = ['$rootScope', '$window', '$state']
