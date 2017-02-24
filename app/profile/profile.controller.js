class ProfileController {
  constructor($state) {
    console.log('Initializing ProfileController');
    $state.transitionTo('profile.dashboard')
  }
}


angular.module('kektus.profile')
  .controller('ProfileController', [
    '$state',
    ProfileController
  ])
