class TeamsProfessorController {
  constructor(Api) {
    this.Api = Api

    this.teamsList = []

    this.Api.getTeams().then((response) => {
        this.teamsList = response.data;
        console.log(response);
        console.log('Team names received');
    })
  }

}

angular.module('kektus.teamsview')
  .controller('TeamsProfessorController', [
    'Api',
    TeamsProfessorController
  ])
