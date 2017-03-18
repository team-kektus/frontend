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
            Api.getAccount().then(function (data) {
              $rootScope.currentUser = data
            }).catch(function () {
              $state.go('root')
            })
          }
        }
      })

      .state('unprotected', {
        abstract: true
      })
  })
