export default class CreateTeamProfessorController {
  constructor(Api, $state) {
    this.Api = Api
    this.model = {}
    this.$state = $state
  }

  createNewTeam() {

    let errors = this.validateModel(this.model)
    if (!errors.empty()) {
      window.alert(`Errors:\n${errors}`)
      return
    }

    this.Api.createTeam(this.model).then(() => {
      window.alert('Team created successfully.')
      this.model = {}
      this.$state.go('teamsview.teams')
    }).catch(error => {
      console.log(error)
      window.alert('Error occured.')
      // this.model = {}
    })
  }

  validateModel(model) {
    let errors = []
    if (model.repository_url && !this.validateURL(model.repository_url))
      errors.push('Repository url is invalid. Use full url with http/https prefix.')
    if (model.staging_url && !this.validateURL(model.staging_url))
      errors.push('Staging url is invalid. Use full url with http/https prefix.')

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

CreateTeamProfessorController.$inject = ['Api', '$state']
