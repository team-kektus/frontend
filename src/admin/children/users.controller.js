export default class UsersAdminController {
  constructor(Api, scope) {
    this.Api = Api
    this.scope = scope


    this.users = []
    this.teams = []
    this.queryString = ""
    this.model = {}

    this.userModal = $('#userModal')
    this.userModal.appendTo("body").modal('hide');

    this.fetchData()
  }

  fetchData() {
    this.fetchUsers()
    this.fetchTeams()
  }

  fetchUsers() {
    this.Api.getUsers().then(response => {
      console.log(response);
      this.users = response.data
    })
  }

  fetchTeams() {
    this.Api.getTeams().then(response => {
      this.teams = response.data
    })
  }

  showUserDetails(user) {
    this.model = user
    this.scope.openedUser = user
    this.userModal.modal('show')
  }


  updatePermissions(user_id) {
    this.Api.updateUserPermissions(user_id, this.model.is_professor, this.model.is_admin).then(() => {
      window.alert('User permissions updated.')
    }).catch(error => {
      console.log(error)
      this.model = {}
      window.alert('Error')
      this.userModal.modal('hide')
    })
  }

  addToTeam(user_id) {
    this.Api.addUserToTeam(user_id, this.model.team.id).then(() => {
      window.alert('User successfully signed to a team.')
    }).catch(error => {
      console.log(error)
      this.model = {}
      window.alert('Error')
      this.userModal.modal('hide')
    })
  }
}

UsersAdminController.$inject = ['Api', '$scope']
