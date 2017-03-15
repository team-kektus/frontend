class LoginController {
  constructor($window) {
    console.log('Initializing LoginController');

    this.screen = 'login'
    this.model = {}
  }

  goToLogin() {
    this.resetModel()
    this.screen = 'login'
  }

  goToRegister() {
    this.resetModel()
    this.screen = 'register'
  }

  goToForgetPassword() {
    this.resetModel()
    this.screen = 'forget-password'
  }

  resetModel() {
    this.model = {}
  }

  login() {
    console.log(this.model);
  }

  forgotPassword() {
    console.log(this.model);
  }

  register() {
    console.log(this.model);
  }
}



angular.module('kektus.login')
  .controller('LoginController', [
    LoginController,
  ])
