class MainController {
  constructor($state) {

    this.$state = $state
  }

  get footer_visible() {
    return !this.$state.includes('login')
  }
}

angular.module('kektus')
  .controller('MainController', [
    '$state',
    MainController
  ])
