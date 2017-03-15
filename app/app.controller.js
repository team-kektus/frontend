class MainController {
  constructor($state) {

    this.$state = $state
  }

  get show_footer() {
    return this.$state.includes('login')
  }
}

angular.module('kektus')
  .controller('MainController', [
    '$state',
    MainController
  ])
