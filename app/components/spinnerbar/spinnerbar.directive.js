class SpinnerBar {
  constructor($rootScope, Settings) {
    this.$rootScope = $rootScope
  }

  link(scope, element, attrs) {
    let $rootScope = this.$rootScope

    element.addClass('hide'); // hide spinner bar by default

    // display the spinner bar whenever the route changes(the content part started loading)
    $rootScope.$on('$stateChangeStart', () => element.removeClass('hide')); // show spinner bar

    // hide the spinner bar on rounte change success(after the content loaded)
    $rootScope.$on('$stateChangeSuccess', function() {
      element.addClass('hide'); // hide spinner bar
      $('body').removeClass('page-on-load'); // remove page loading indicator
    });

    // handle errors
    $rootScope.$on('$stateNotFound', () => element.addClass('hide')) // hide spinner bar

    // handle errors
    $rootScope.$on('$stateChangeError', () => element.addClass('hide')) // hide spinner bar
  }
}

angular.module('kektus.components.spinnerbar')
  .directive('spinnerBar', [
    '$rootScope',
    SpinnerBar
  ])
