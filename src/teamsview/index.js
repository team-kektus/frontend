import Controller from './controller'
import routing from './routing'

import TeamsController from './children/teams.controller'
import CreateTeamController from './children/createteam.controller'

export default angular.module('kektus.teamsview', [

])
.controller('TeamsMainController', Controller)
.controller('TeamsProfessorController', TeamsController)
.controller('CreateTeamProfessorController', CreateTeamController)
.config(routing)
.name
