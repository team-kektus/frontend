class AccountController {
  constructor(Api, $state, $http) {
    console.log('Initializing AccountController');

    this.Api = Api
    this.$state = $state
    this.$http = $http

    this.model = {}
  }

  saveChanges() {
    this.Api.updateAccount(this.model)
      .then(() => {
        window.alert("Ok")
        this.$state.reload()
      })
      .catch((response) => {
        console.log(response);
        window.alert('Error')
      })
    this.resetModel()
  }

  changeAvatar() {
    this.Api.changeAccountAvatar(this.model.avatar.file)
      .then(() => {
        window.alert("Ok")
        this.$state.reload()
      })
      .catch((response) => {
        console.log(response);
        window.alert('Error')
      })
    this.resetModel()
  }

  resetModel() {
    this.model = {}
  }
}



angular.module('kektus.login')
  .controller('AccountController', [
    'Api',
    '$state',
    '$http',
    AccountController,
  ])
