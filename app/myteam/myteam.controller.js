class MyTeamController {
  constructor(Api, $state) {
    console.log('Initializing MyTeamController');

    this.Api = Api
    this.$state = $state
  }

}


angular.module('kektus.teamsview')
  .controller('MyTeamController', [
    'Api',
    '$state',
    MyTeamController
])
