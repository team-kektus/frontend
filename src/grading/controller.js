export default class GradingController {
  constructor(Api, $location) {
    this.Api = Api
    this.$location = $location

    this.gradingAspects = []

    this.modal = $('#aspectHelpModal')
    this.modal_body = this.modal.find('.modal-body')
    this.modal.appendTo("body").modal('hide');
    this.modal.on('hidden.bs.modal', e => {
      this.modal_body.empty()
    })

    this.Api.getGradingAspects().then((response) => {
        this.gradingAspects = response.data;
        console.log('Grading aspects received');
    })
  }

  getTeamPoints() {

  }

  openHelpModal(url) {
    if (url) {
      this.modal_body.load(`${url} #wikitext`)
    }
    else {
       this.modal_body.text("Courses lehelt ei leitud andmeid.")
    }
    this.modal.modal('show')
  }
}

GradingController.$inject = ['Api', '$location']
