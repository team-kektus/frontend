class MainController {
  constructor($rootScope, $location, Api) {
    this.$rootScope = $rootScope
    this.Api = Api
    this.$location = $location
    this.current_year = new Date().getFullYear()
  }

  logout() {
    console.log('logout');
    this.Api.logout().then((result) => console.log(result))
    this.$rootScope.currentUser = null
    this.$location.path('/login/')
    // window.location.reload()
  }
}

angular.module('kektus')
  .controller('MainController', [
    '$rootScope',
    '$location',
    'Api',
    MainController
  ])
