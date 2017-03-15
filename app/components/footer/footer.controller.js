class FooterController {
  constructor() {
    console.log('Initializing FooterController');
  }
}

angular.module('kektus.components.footer')
  .controller('FooterController', [
    FooterController,
  ])
