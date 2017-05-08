import Controller from './controller'
import routing from './routing'

import UsersAdminController from './children/users.controller'

export default angular.module('kektus.admin', [

])
.controller('AdminController', Controller)
.controller('UsersAdminController', UsersAdminController)
.config(routing)
.name
