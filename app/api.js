class Api {
  constructor(Restangular, $http) {
    this.Restangular = Restangular
    this.$http = $http
  }

  getUsers() {
    return this.Restangular.all('users').getList()
  }

  login(params) {
    return this.Restangular.all('auth').post(params)
  }

  socialLogin(provider, accessToken) {
    return this.Restangular.all('auth').all('social').post({
      provider: provider,
      access_token: accessToken
    })
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

  updateAccount(params) {
    return this.Restangular.one('account').put(params)
  }

  getGradingAspects() {
    return this.Restangular.all('grading_aspects').getList()
  }

  getTeams() {
    return this.Restangular.all('teams').getList()
  }

  changeAccountAvatar(avatar_file) {
    return this.putAvatar("/api/v1/account.json", avatar_file)
  }

  changeMyTeamAvatar(avatar_file) {
    return this.putAvatar("/api/v1/account/team.json", avatar_file)
  }


  putAvatar(url, avatar_file) {
    let formData = new FormData();
    formData.append('avatar', avatar_file)

    // Bug, restangular with Content-Type undefined returns 400
    return this.$http.put(url, formData, {
      transformRequest: angular.identity,
      headers: {'Content-Type': undefined}
    })
  }

  updateTeam(params) {
    return this.Restangular.one('account').one('team').put(params)
  }

}


angular.module('kektus')
  .service('Api', [
    'Restangular',
    '$http',
    Api
  ])
