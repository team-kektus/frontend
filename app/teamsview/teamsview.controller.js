class TeamsviewController {
  constructor(Api, $location) {
    console.log('Initializing TeamsviewController');

    this.Api = Api
    this.$state = $location

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
    '$location',
    TeamsviewController
])
