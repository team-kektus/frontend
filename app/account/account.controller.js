class AccountController {
  constructor(Api, $state, $http) {
    console.log('Initializing AccountController');

    this.Api = Api
    this.$state = $state
    this.$http = $http

    this.model = {}
  }

  saveChanges() {
    this.model.avatar = this.model.raw_avatar.file
    delete this.model.raw_avatar

    let formData = new FormData();

    for ( let key in this.model ) {
        formData.append(key, this.model[key]);
    }

    // Bug, restangular with Content-Type undefined returns 400
    this.$http.put("/api/v1/account.json", formData, {
      transformRequest: angular.identity,
      headers: {'Content-Type': undefined}
    }).then(() => {
        window.alert("Ok")
        this.$state.reload()
    }).catch(() => {
        window.alert('Error')
    })
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
