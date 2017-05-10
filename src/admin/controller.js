export default class AdminController {
  constructor(Api, $state) {
    console.log('Initializing AdminController');

    this.Api = Api
    this.$state = $state
  }
}

AdminController.$inject = ['Api', '$state']
