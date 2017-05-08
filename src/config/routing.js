export default function RoutingConfig($locationProvider, $urlRouterProvider, $stateProvider) {
  $locationProvider.html5Mode(true)

  $urlRouterProvider.otherwise('/')

  $stateProvider
    .state('root', {
      resolve: {
        redirect: function ($rootScope, $location) {
          console.log('resolving root');
          // $location.search()
          console.log("asd");
          console.log($rootScope);
          console.log($location);

          if ('currentUser' in $rootScope) {
            path = '/'
          }
          else {
            path = '/login/'
          }

          console.log("path");

          if (path != $location.$$path) {
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
          console.log('resolving protected');
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
          template: require('../abstract_views/protected.template.html')
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
      template: require('../abstract_views/not-found.html')
    })
}

RoutingConfig.$inject = ['$locationProvider', '$urlRouterProvider', '$stateProvider']
