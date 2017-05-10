export default function RoutingConfig($locationProvider, $urlRouterProvider, $stateProvider) {
  $locationProvider.html5Mode(true)

  $urlRouterProvider.otherwise('/')

  $stateProvider
    .state('root', {
      resolve: {
        redirect: function ($rootScope, $location) {
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

    .state('protected-wrapper', {
      abstract: true,
      template: require('../abstract_views/protected.template.html')
    })

    .state('protected', {
      parent: 'protected-wrapper',
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
        'header': {
          template: require('../layout_parts/header.template.html')
        },
        'sidebar': {
          template: require('../layout_parts/sidebar.template.html')
        },
        'content': {
          template: '<div ui-view class="fade-in-up"></div>'
        },
        'footer': {
          template: require('../layout_parts/footer.template.html')
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
