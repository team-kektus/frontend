class AdminController {
  constructor(Api, $state) {
    console.log('Initializing AdminController');

    this.Api = Api
    this.$state = $state
  }
}

angular.module('kektus.admin').
  controller('AdminController', [
    'Api',
    '$state',
    AdminController
  ])
