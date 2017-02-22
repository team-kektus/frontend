class LoginController {
  constructor($window) {
    this.$window = $window
    console.log('Initializing LoginController');
  }

  goToApp() {
    this.$window.location.href = '/app.html'
  }
}



angular.module('kektus.login')
  .controller('LoginController', [
    '$window',
    LoginController,
  ])
