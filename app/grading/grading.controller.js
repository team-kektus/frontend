class GradingController {
  constructor() {
    this.persons = [

    {isaspect: 'true', number: '1.1', description: 'Andmete salvestamine andmebaasi',first_name: 'asd', last_name: 'sfd', datetime: '5', esitamise_etapp:'1', id:'0'},
    {isaspect: 'true', number: '1.2', description: 'Andmebaasi andmete esitamine', first_name: 'ttd', last_name: 'sfd', datetime: '5',esitamise_etapp:'1', id:'1'},
    {isaspect: 'true', number: '1.3', description: 'Agregeeritud andmete esitamine',  first_name: 'ptd', last_name: 'sfd', datetime: '6', esitamise_etapp:'1', id:'2'},
    {isaspect: 'false', kehtivus: 'Eraldatus' , kehtivusepunktid: '5', etapp1: '1' , id:'3'},
    {isaspect: 'false', kehtivus: 'CSS Kehtivus', kehtivusepunktid: '2', etapp1: '2',  id:'4'},
    {isaspect: 'false', number: '1.3', description: 'Agregeeritud andmete esitamine', first_name: 'ptd', last_name: 'sfd', datetime: '6', esitamise_etapp:'1', id:'5', kehtivus: 'CSS Kehtivus', kehtivusepunktid: '2', etapp1: '2'},
    {isaspect: 'true', number: '1.4', description: 'Sample', first_name: 'fdstd', last_name: 'sfd', datetime: '46', esitamise_etapp:'1', id:'6', kehtivus: 'CSS Kehtivus', kehtivusepunktid: '2', etapp1: '2'}
    
    ];
    this.editingData = {};

    for (var i = 0, length = this.persons.length; i < length; i++) {
      this.editingData[this.persons[i].id] = false;
    }

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
    GradingController
])
