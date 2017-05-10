import Controller from './controller'
import routing from './routing'

import UsersAdminController from './children/users.controller'
import MyTeamController from '../myteam/children/settings.controller.js'

export default angular.module('kektus.admin', [

])
.controller('AdminController', Controller)
.controller('UsersAdminController', UsersAdminController)
.controller('MyTeamController', MyTeamController)
.config(routing)
.name
