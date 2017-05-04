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
      ACCCHANGE: 'Muuda',


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

      MAINWELCOME: 'Tere tulemast hindamissüsteemi',

      TEAMSET: 'Tiimi sätted',
      TEAMNAME: 'Tiimi nimi',
      TEAMPROJECT: 'Projekti nimi',
      TEAMURL: 'Koodihoidla URL',
      TEAMENV: 'Testkeskkond',
      TEAMABOUT: 'Lisa',

      MYPAGE: 'Professori leht',
      MYOP: 'Professori valikud',
      MYCREATE: 'Loo uus tiim',

      CREATEEG: 'Näiteks: Team-Kektus.',
      CREATEEG2: 'Näiteks: Grading system.',
      CREATENAME: 'Nimi.',





























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
      ACCCHANGE: 'Change',
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

      MAINWELCOME: 'Welcome to the grading sytem',

      TEAMSET: 'Team settings',
      TEAMNAME: 'Team name',
      TEAMPROJECT: 'Project name',
      TEAMURL: 'Repository URL',
      TEAMENV: 'Staging environment URL',
      TEAMABOUT: 'About',


      MYPAGE: 'Professor page',
      MYOP: 'Professor tasks',
      MYCREATE: 'Create new team',

      CREATEEG: 'E.g: Team-Kektus.',
      CREATEEG2: 'E.g: Grading system.',
      CREATENAME: 'Name.',


































































      en: 'English',
      ee: 'Eesti'
    });
    $translateProvider.preferredLanguage(localStorage.getItem('languagePreference') || 'ee');
    //$translateProvider.preferredLanguage('ee');

  })
