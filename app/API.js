class Api {
  constructor(Restangular) {
    this.Restangular = Restangular
  }

  getUsers() {
    return this.Restangular.all('users').getList()
  }

  login(params) {
    return this.Restangular.all('auth').post(params)
  }

  register(params) {
    return this.Restangular.all('users').post(params)
  }
}


angular.module('kektus')
  .service('Api', [
    'Restangular',
    Api
  ])
