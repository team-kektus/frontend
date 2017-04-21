angular.module('kektus')
  .run(['$rootScope', '$state', function($rootScope, $state) {

    $rootScope.$on('$stateChangeStart', function(evt, to, params) {
      if (to.redirectTo) {
        evt.preventDefault();
        $state.go(to.redirectTo, params, {location: 'replace'})
      }
    });
  }])
  
  .config(function ($stateProvider) {
    $stateProvider
      .state('root', {
        resolve: {
          redirect: function ($rootScope, $location) {
            $location.search()
            old_path = $location.$$path

            if ('currentUser' in $rootScope)
              path = '/'
            else
              path = '/login/'

            if (path != old_path) {
              $location.path(path)
            } else {
              window.location.reload()
            }
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
