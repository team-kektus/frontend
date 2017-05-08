import Controller from './controller'
import routing from './routing'

import SettingsController from './children/settings.controller'

angular.module('kektus.myteam', [

])
.controller('MyTeamController', Controller)
.controller('MyTeamSettingsController', SettingsController)
.config(routing)
.name
