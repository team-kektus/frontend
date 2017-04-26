angular.module('kektus', [
  'ui.router',
  'ui.select',
  'restangular',
  'pascalprecht.translate',
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

  .config(function ($translateProvider) {
    $translateProvider.useSanitizeValueStrategy(null);

    $translateProvider.translations('ee', {
      ACCINFO: 'Isiklik info',
      ACCAVATAR: 'Vaheta profiili pilti',
      ACCPW: 'Vaheta parooli',
      ACCPRIV: 'Privaatsus sätted',
      ACCNAME: 'Ees- ja perekonnanimi',
      ACCAADRESS: 'Aadress',
      ACCCITY: 'Linn/Asula',
      ACCPROF: 'Eriala',
      ACCSAVE: 'Salvesta muudatused',
      ACCRESET: 'Lähtesta',






      en: 'English',
      ee: 'Eesti'
    })
    .translations('en', {
      ACCINFO: 'Personal info',
      ACCAVATAR: 'Change Avatar',
      ACCPW: 'Change Password',
      ACCPRIV: 'Privacy Settings',
      ACCNAME: 'First and lastname',
      ACCAADRESS: 'Address',
      ACCCITY: 'City/Village',
      ACCPROF: 'Profession',
      ACCSAVE: 'Save changes',
      ACCRESET: 'Reset',





      en: 'English',
      ee: 'Eesti'
    });
    $translateProvider.preferredLanguage(localStorage.getItem('languagePreference') || 'ee');
    //$translateProvider.preferredLanguage('ee');

  })
