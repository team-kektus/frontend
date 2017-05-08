export default class TeamsController {
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

TeamsController.$inject = ['Api']
