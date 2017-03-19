class MainController {
  constructor($state, Api) {
    this.Api = Api
    this.$state = $state
    this.current_year = new Date().getFullYear()
  }

  logout() {
    console.log('logout');
    this.Api.logout().then((result) => console.log(result))
  }
}

angular.module('kektus')
  .controller('MainController', [
    '$state',
    'Api',
    MainController
  ])
