class UsersAdminController {
  constructor(Api, scope) {
    this.Api = Api
    this.scope = scope


    this.users = []
    this.queryString = ""

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
    this.scope.openedUser = user
    this.userModal.modal('show')
  }
}


angular.module('kektus.admin')
  .controller('UsersAdminController', [
    'Api',
    '$scope',
    UsersAdminController
  ])
