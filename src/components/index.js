import SpinnerBar from './spinnerbar'
import FileRead from './fileread'
import {ProtectedAdmin, ProtectedProfessor} from './protected-content'

export default angular.module('kektus.components', [

])
.directive('spinnerBar', SpinnerBar)
.directive('fileread', FileRead)
.directive('protectedAdmin', ProtectedAdmin)
.directive('protectedProfessor', ProtectedProfessor)
.name
