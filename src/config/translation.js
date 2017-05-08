export default function TranslationConfig($translateProvider) {
  $translateProvider.useSanitizeValueStrategy(null);

  $translateProvider
    .translations('ee', require('../i18n/ee.json'))
    .translations('en', require('../i18n/en.json'));
  $translateProvider.preferredLanguage(localStorage.getItem('languagePreference') || 'ee');
  //$translateProvider.preferredLanguage('ee');

}

TranslationConfig.$inject = ['$translateProvider']
