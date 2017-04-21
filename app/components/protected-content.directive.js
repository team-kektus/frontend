angular.module('kektus.components')
  .directive("protectedProfessor", ['$rootScope', function($rootScope) {
    return {
      link: function(scope, element, attributes) {
        if (!$rootScope.currentUser.is_professor) {
          element.hide()
        }
      }
    }
  }])

  .directive("protectedAdmin", ['$rootScope', function($rootScope) {
    return {
      link: function(scope, element, attributes) {
        if (!$rootScope.currentUser.is_admin) {
          element.hide()
        }
      }
    }
  }])
