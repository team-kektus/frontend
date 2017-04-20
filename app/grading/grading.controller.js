class GradingController {
  constructor(Api, $location) {

    $('#myModal').appendTo("body").modal('hide');

    this.Api = Api
    this.$location = $location

    this.persons = [

    {isaspect: 'true', number: '1.1', description: 'Andmete salvestamine andmebaasi',first_name: '1', last_name: '2', datetime: '', esitamise_etapp:'1', id:'0', punktid:'1'},
    {isaspect: 'true', number: '1.2', description: 'Andmebaasi andmete esitamine', first_name: 'ttd', last_name: 'sfd', datetime: 'etapp 6',esitamise_etapp:'1', id:'1', punktid:'1'},
    {isaspect: 'true', number: '1.3', description: 'Agregeeritud andmete esitamine',  first_name: 'ptd', last_name: 'sfd', datetime: '6', esitamise_etapp:'1', id:'2', punktid:'1'},
    {isaspect: 'false', kehtivus: 'HTML kehtivus' , kehtivusepunktid: '2', etapp1: '1', etapp2: '2', etapp3: '2', etapp4: '2', etapp5: '2', id:'3'},
    {isaspect: 'false', kehtivus: 'CSS Kehtivus', kehtivusepunktid: '2', etapp1: '2',  etapp2: '2', etapp3: '2', etapp4: '2', etapp5: '2', id:'4'},
    {isaspect: 'false', number: '1.3', description: 'Javascriptiga lehe muutmine', first_name: 'ptd', last_name: 'sfd', datetime: '6', esitamise_etapp:'1', id:'5', kehtivus: 'Eraldatus', kehtivusepunktid: '2', etapp1: '2',etapp2: '2', etapp3: '2', etapp4: '2', etapp5: '2'},
    {isaspect: 'true', number: '1.4', description: 'Sample', first_name: 'fdstd', last_name: 'sfd', datetime: '46', esitamise_etapp:'1', id:'6', kehtivus: 'CSS Kehtivus', kehtivusepunktid: '2', etapp1: '2'}

    ];
    this.editingData = {};

    for (var i = 0, length = this.persons.length; i < length; i++) {
      this.editingData[this.persons[i].id] = false;
    }

    this.gradingAspects = [];

    this.Api.getGradingAspects().then((response) => {
        this.gradingAspects = response.data;
        console.log(response);
        console.log('Grading aspects received');
    })



  }

  getTeamPoints() {

  }

  modify(tableData){
    this.editingData[tableData.id] = true;
  };


  update(tableData){
      this.editingData[tableData.id] = false;
  };

}

angular.module('kektus.grading')
  .controller('GradingController', [
    'Api',
    '$location',
    GradingController
])
