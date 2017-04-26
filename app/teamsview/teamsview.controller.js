class TeamsviewController {
  constructor(Api, $state) {
    console.log('Initializing TeamsviewController');

    this.Api = Api
    this.$state = $state

  }
}


angular.module('kektus.teamsview')
  .controller('TeamsviewController', [
    'Api',
    '$state',
    TeamsviewController
])
