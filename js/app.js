"use strict"

const corazonInicio = document.getElementById('container-heart');
const main = document.querySelector('main');

inicioApp();

function inicioApp() {
    if(main.classList.contains('hidden')) {
        setTimeout( function() {
            main.classList.remove('hidden');
            corazonInicio.classList.add('hidden');
        }, 5000);
    }
}