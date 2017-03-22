(function(){
    'use strict';

    angular.module('kektus.grading', [])

    .controller('AsdCtrl', [ function () {

        this.persons = [

    {number: '1.1', description: 'Andmete salvestamine andmebaasi',first_name: 'asd', last_name: 'sfd', datetime: '5', esitamise_etapp:'1', id: '', etapp1: '2', kehtivus: 'HTML Kehtivus', kehtivusepunktid: '2'},
    {number: '1.2', description: 'Andmebaasi andmete esitamine', first_name: 'ttd', last_name: 'sfd', datetime: '5',esitamise_etapp:'1', id: '', etapp1: '2', kehtivus: 'CSS Kehtivus', kehtivusepunktid: '2'},
    {number: '1.3', description: 'Agregeeritud andmete esitamine',  first_name: 'ptd', last_name: 'sfd', datetime: '6', esitamise_etapp:'1', id: '', etapp1: '1', kehtivus: 'Eraldatus' , kehtivusepunktid: '5' }

];

    }]);

})();
