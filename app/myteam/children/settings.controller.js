class MyTeamSettingsController {
  constructor(Api, $state) {
    console.log('Initializing MyTeamSettingsController');

    this.Api = Api
    this.$state = $state

    this.model = {}
  }

  saveChanges() {
    let errors = this.validateModel(this.model)
    if (!errors.empty()) {
      window.alert(`Errors:\n${errors}`)
      return
    }

    this.Api.updateTeam(this.model)
      .then(() => {
        window.alert("Ok")
        this.$state.reload()
      })
      .catch((response) => {
        console.log(response);
        window.alert('Error')
      })
    this.resetModel()
  }

  changeAvatar() {
    this.Api.changeMyTeamAvatar(this.model.avatar.file)
      .then(() => {
        window.alert("Ok")
        this.$state.reload()
      })
      .catch((response) => {
        console.log(response);
        window.alert('Error')
      })
    this.resetModel()
  }

  resetModel() {
    this.model = {}
  }

  validateModel(model) {
    let errors = []
    if (model.repository_url && !this.validateURL(model.repository_url))
      errors.push('Repository url is invalid. Use full url with http/https prefix.')
    if (model.staging_url && !this.validateURL(model.staging_url))
      errors.push('Staging url is invalid. Use full url with http/https prefix.')
    if (model.description && model.description.length < 5 || model.description.length > 50)
      errors.push('Description has to have at least 5 letters and maximum of 50 letters.')

    return errors
  }

  validateURL(url) {
    try {
      url = new URL(url)
      return !!url.hostname
    } catch (e) {
      return false
    }
  }

}


angular.module('kektus.teamsview')
  .controller('MyTeamSettingsController', [
    'Api',
    '$state',
    MyTeamSettingsController
])
