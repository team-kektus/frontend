class AccountController {
  constructor(Api, $location) {
    console.log('Initializing AccountController');

    this.Api = Api
    this.$location = $location

    this.model = {}
  }

  saveChanges() {
    this.Api.saveChanges(this.model).then(() => {
      window.alert("ok");
    })
    //else {console.log("something went wrong");}
  }

}



angular.module('kektus.login')
  .controller('AccountController', [
    'Api',
    '$location',
    AccountController,
  ])
