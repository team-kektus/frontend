class LoginController {
  constructor(Api, $location) {
    console.log('Initializing LoginController');

    this.Api = Api
    this.$location = $location

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
    let vm = this
    this.Api.login(this.model).then(function (response) {
      vm.$location.path('/')
    })
  }

  forgotPassword() {
    console.log(this.model);
  }

  register() {
    let vm = this
    if (this.is_valid(this.model))
      this.Api.register(this.model).then(function (response) {
        vm.goToLogin()
      })
    else
      console.log("form is not valid");
  }

  is_valid(params) {
    if (params.agreed && params.password === params.rpassword)
      return true
    else
      return false
  }

  facebookLogin() {
    FB.login(response => {
      this.Api.socialLogin('facebook', response.authResponse.accessToken).then(() => {
        this.$location.path('/')
      })
    }, { scope: 'email' })
  }
}



angular.module('kektus.login')
  .controller('LoginController', [
    'Api',
    '$location',
    LoginController,
  ])
