export function ProtectedAdmin($rootScope) {
  return {
    link: function(scope, element, attributes) {
      if (!$rootScope.currentUser.is_admin) {
        element.hide()
      }
    }
  }
}

ProtectedAdmin.$inject = ['$rootScope']


export function ProtectedProfessor($rootScope) {
  return {
    link: function(scope, element, attributes) {
      if (!$rootScope.currentUser.is_professor) {
        element.hide()
      }
    }
  }
}

ProtectedProfessor.$inject = ['$rootScope']
