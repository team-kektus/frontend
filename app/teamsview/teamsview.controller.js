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


    this.model = {}

  }

  createNewTeam() {
    this.Api.createTeam(this.model).then(() => {
      window.alert('Team created successfully.')
      this.teamsList.push(this.model)
      this.model = {}
    }).catch(error => {
      console.log(error)
      window.alert('Error occured.')
      this.model = {}
    })
  }

}


angular.module('kektus.teamsview')
  .controller('TeamsviewController', [
    'Api',
    '$state',
    TeamsviewController
])
