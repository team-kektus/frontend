class AccountController {
  constructor(Api, $state) {
    console.log('Initializing AccountController');

    this.Api = Api
    this.$state = $state

    this.model = {}
  }

  saveChanges() {
    this.Api.saveChanges(this.model).then(() => {
      window.alert("ok")
      this.$state.reload()
    })
    //else {console.log("something went wrong");}
  }

  handleFiles(e) {
    console.log(e);
    console.log(this.model);
  }

}



angular.module('kektus.login')
  .controller('AccountController', [
    'Api',
    '$state',
    AccountController,
  ])
