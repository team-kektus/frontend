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
            window.location.reload()

          }
        }
      })

      .state('protected', {
        abstract: true,
        resolve: {
          getCurrentUser: function ($rootScope, $state, Api) {
            Api.getAccount().then(function (result) {
              $rootScope.currentUser = result.data
            }).catch(function () {
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
  })
