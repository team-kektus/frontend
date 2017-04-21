class UsersAdminController {
  constructor(Api, scope) {
    this.Api = Api
    this.scope = scope


    this.users = []
    this.queryString = ""
    this.model = {}

    this.userModal = $('#userModal')
    this.userModal.appendTo("body").modal('hide');

    this.fetchData()
  }

  fetchData() {
    this.fetchUsers()
  }

  fetchUsers() {
    this.Api.getUsers().then(response => {
      console.log(response);
      this.users = response.data
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
    this.Api.addUserToTeam(user_id, this.model.team_id).then(() => {
      window.alert('User successfully signed to a team.')
    }).catch(error => {
      console.log(error)
      this.model = {}
      window.alert('Error')
      this.userModal.modal('hide')
    })
  }
}


angular.module('kektus.admin')
  .controller('UsersAdminController', [
    'Api',
    '$scope',
    UsersAdminController
  ])
