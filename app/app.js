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
      ACCIMG: 'Vali pilt',
      ACCNOTE: 'Tähelepanu!',
      ACCTEXT: 'Pildi lisamine on toetatud ainult kõige uuemates Firfoxi, Chromei, Safari ja Internet Exploreri veebilehitsejates',
      ACCSUB: 'Esita',
      ACCCANCEL: 'Tühista',
      ACCPWNOW: 'Praegune salasõna',
      ACCPWNEW: 'Uus salasõna',
      ACCPWRENEW: 'Korda uut salasõna',
      ACCPWENTER: 'Vaheta salasõna',
      ACCYES: 'Jah',
      ACCNO: 'Ei',
      ACCPROFILE: 'Kasutaja profiil',
      ACCIMGREMOVE: 'Eemalda',
      ACCHOME: 'Kodu',

      ADPAGE: 'Admini leht',
      ADTASK: 'Admini valikud',
      ADOVER: 'Ülevaade',
      ADUSER: 'Kasutajad',

      GRWAIT: 'Palun oodake',
      GRCLOSE: 'Sulge',
      GRPOINTS: 'Puntkid',
      GRDATE: 'Tähtaeg',

      HEDASH: 'Armatuurlaud',
      HEPROF: 'Minu profiil',
      HETASK: 'Minu ülesanded',
      HELOG: 'Logi välja',

      SIGEN: 'Üldine',
      SIUSER: 'Kasutaja profiile',
      SITEAM: 'Minu Tiim',
      SITASK: 'Tööd ja tegemised',
      SITEAM: 'Tiimid',
      SIADMIN: 'Admin',

      LOGSIGN: 'Logi sisse',
      LOGCCRED: 'Sisestage e-mail ja parool',
      LOGEMAIL: 'E-mail',
      LOGPW: 'Parool',
      LOGLOG: 'Logi sisse',
      LOGREM: 'Mäleta mind',
      LOGFORGOT: 'Unustasid parooli?',
      LOGALT: 'Või logi sisse...',
      LOGCREATE: 'Loo kasutaja',
      LOGDETAILS: 'Enter your e-mail address below to reset your password.',
      LOGBACK: 'Tagasi',
      LOGSUB: 'Esita',
      LOGSIGNUP: 'Loo konto',
      LOGINFO: 'Sisestage oma isiklikud andmed:',
      LOGNAME: 'Täisnimi',
      LOGADDRESS: 'Aadress',
      LOGTOWN: 'Linn',
      LOGDETAILS2: 'Sisestage oma kasutaja andmed:',
      LOGAGREE: 'Nõustun ',
      LOGTERMS: 'kasutajatingimuste',
      LOGPOLICY: 'privaatsus tingimustega.',




















      en: 'English',
      ee: 'Eesti'
    })
    .translations('en', {
//ADMIN
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
      ACCIMG: 'Select image',
      ACCNOTE: 'NOTE!',
      ACCTEXT: 'Attached image thumbnail is supported in Latest Firefox, Chrome, Opera, Safari and Internet Explorer 10 only',
      ACCSUB: 'Submit',
      ACCCANCEL: 'Cancel',
      ACCPWNOW: 'Current Password',
      ACCPWNEW: 'New Password',
      ACCPWRENEW: 'Re-type New Password',
      ACCPWENTER: 'Change Password',
      ACCYES: 'Yes',
      ACCNO: 'No',
      ACCPROFILE: 'Profile Account',
      ACCIMGREMOVE: 'Remove',
      ACCHOME: 'Home',
//ADMIN
      ADPAGE: 'Admin page',
      ADTASK: 'Admin tasks',
      ADOVER: 'Overview',
      ADUSER: 'Users',
//GRADING
      GRWAIT: 'Please wait',
      GRCLOSE: 'Close',
      GRPOINTS: 'Points',
      GRDATE: 'Date',

//HEADER
      HEDASH: 'Dashboard',
      HEPROF: 'My Profile',
      HETASK: 'My Tasks',
      HELOG: 'Log Out',
//SIDE
      SIGEN: 'GENERAL',
      SIUSER: 'User profile',
      SITEAM: 'My Team',
      SITASK: 'Tasks and todo',
      SITEAM: 'Teams',
      SIADMIN: 'Admin',
//LOGIN
      LOGSIGN: 'Sign In',
      LOGCCRED: 'Enter any email and password.',
      LOGEMAIL: 'Email',
      LOGPW: 'Password',
      LOGLOG: 'Login',
      LOGREM: 'Remember',
      LOGFORGOT: 'Forgot Password?',
      LOGALT: 'Or login with',
      LOGCREATE: 'Create an account',
      LOGDETAILS: 'Enter your e-mail address below to reset your password.',
      LOGBACK: 'Back',
      LOGSUB: 'Submit',
      LOGSIGNUP: 'Sign Up',
      LOGINFO: 'Enter your personal details below:',
      LOGNAME: 'Full name',
      LOGADDRESS: 'Address',
      LOGTOWN: 'City/Town',
      LOGDETAILS2: 'Enter your account details below:',
      LOGAGREE: 'I agree to the',
      LOGTERMS: 'Terms of Service',
      LOGPOLICY: 'Privacy Policy',













































      en: 'English',
      ee: 'Eesti'
    });
    $translateProvider.preferredLanguage(localStorage.getItem('languagePreference') || 'ee');
    //$translateProvider.preferredLanguage('ee');

  })
