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

  logout() {
    return this.Restangular.one('auth').one('logout').get()
  }

  register(params) {
    return this.Restangular.all('users').post(params)
  }

  getAccount() {
    return this.Restangular.one('account').get()
  }
}


angular.module('kektus')
  .service('Api', [
    'Restangular',
    Api
  ])
