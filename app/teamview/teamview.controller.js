class TeamviewController {
  constructor(Api, $location) {
    console.log('Initializing TeamviewController');

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


angular.module('kektus.teamview')
  .controller('TeamviewController', [
    'Api',
    '$location',
    TeamviewController
])
