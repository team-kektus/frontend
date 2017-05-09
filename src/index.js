import 'bootstrap/dist/css/bootstrap-theme.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min'
import 'font-awesome/css/font-awesome.css'
import 'simple-line-icons/css/simple-line-icons.css'

import './index.scss'

import angular from 'angular'
import uirouter from 'angular-ui-router'
import uiselect from 'ui-select'
import translate from 'angular-translate'
import restangular from 'restangular'


import Api from './config/api'
import MainController from './config/maincontroller'
import RoutingConfig from './config/routing'
import TranslationConfig from './config/translation'
import RestangularConfig from './config/restangular'
import RunConfig from './config/run'

import components from './components'


import loginview from './login'
import accountview from './account'
import mainview from './main'
import gradingview from './grading'
import teamsview from './teamsview'
import myteamview from './myteam'
import adminview from './admin'




angular.module('kektus', [
  uirouter,
  uiselect,
  restangular,
  translate,

  components,
  loginview,
  accountview,
  mainview,
  gradingview,
  // teamsview,
  // myteamview,
  // adminview,
])

.service('Api', Api)
.controller('MainController', MainController)
.config(RoutingConfig)
.config(TranslationConfig)
.config(RestangularConfig)
.run(RunConfig)
