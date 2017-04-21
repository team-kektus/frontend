class TeamsviewController {
  constructor(Api, $state) {
    console.log('Initializing TeamsviewController');

    this.Api = Api
    this.$state = $state

    this.teamsList = [];

    this.Api.getTeams().then((response) => {
        this.teamsList = response.data;
        console.log(response);
        console.log('Team names received');
    })

  }

}


angular.module('kektus.teamsview')
  .controller('TeamsviewController', [
    'Api',
    '$state',
    TeamsviewController
])
