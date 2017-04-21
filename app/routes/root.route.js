angular.module('kektus')
  .config(function ($stateProvider) {
    $stateProvider
      .state('root', {
        resolve: {
          redirect: function ($rootScope, $location) {
            $location.search()

            if ('currentPerson' in $rootScope)
              path = '/account/'
            else
              path = '/login/'

            $location.path(path)
            // window.location.reload()

          }
        }
      })

      .state('protected', {
        abstract: true,
        resolve: {
          currentUser: function ($rootScope, $state, Api) {
            return Api.getAccount().then(result => {
              $rootScope.currentUser = result.data
              $rootScope.currentTeam = $rootScope.currentUser.team
              return result.data
            }).catch(() => {
              $state.go('root')
            })
          }
        },
        views: {
          '': {
            templateUrl: 'abstract_views/protected.template.html'
          }
        }
      })

      .state('public', {
        abstract: true
      })


      .state('protected-professor', {
        abstract: true,
        parent: 'protected',
        resolve: {
          isProfessor: function (currentUser, $state) {
            if (!currentUser.is_professor)
              $state.go('not-found')
          }
        },
        template: '<ui-view />'
      })

      .state('protected-admin', {
        abstract: true,
        parent: 'protected',
        resolve: {
          isAdmin: function (currentUser, $state) {
            if (!currentUser.is_admin)
              $state.go('not-found')
          }
        },
        template: '<ui-view />'
      })

      .state('not-found', {
        parent: 'protected',
        templateUrl: 'not-found.html'
      })
  })
