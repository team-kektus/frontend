class MainController {
  constructor($state) {

    this.$state = $state
  }
}

angular.module('kektus')
  .controller('MainController', [
    '$state',
    MainController
  ])
