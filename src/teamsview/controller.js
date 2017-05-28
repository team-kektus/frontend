export default class TeamsviewController {
  constructor(Api, $state) {
    console.log('Initializing TeamsviewController');

    this.Api = Api
    this.$state = $state

  }
}

TeamsviewController.$inject = ['Api', '$state']
