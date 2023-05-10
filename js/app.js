"use strict"

const corazonInicio = document.getElementById('container-heart');
const main = document.querySelector('main');
// const audio = new Audio(['../multimedia/a-sky-full-of-stars-traducida-al-espanol.wav']);
const audio = document.querySelector('audio');
const btnMusica =  document.getElementById('btn-musica');

inicioApp();

function inicioApp() {
    if(main.classList.contains('hidden')) {
        setTimeout( function() {
            main.classList.remove('hidden');
            corazonInicio.classList.add('hidden');
        }, 5000);
    }
}

btnMusica.addEventListener('click', () => {
    const icon = document.querySelector('#btn')
    if(audio.paused) {
        reproducirAudio();
        icon.classList.remove('fa-volume-xmark');
        icon.classList.add('fa-music');
    } else {
        detenerAudio();
        icon.classList.add('fa-volume-xmark');
        icon.classList.remove('fa-music');
    }
});

function reproducirAudio() {
    audio.play();
}

function detenerAudio() {
    audio.pause();
}