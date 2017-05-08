export default class MyTeamController {
  constructor(Api, $state) {
    console.log('Initializing MyTeamController');

    this.Api = Api
    this.$state = $state
  }

}

MyTeamController.$inject = ['Api', '$state']
