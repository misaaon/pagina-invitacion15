"use strict"

const corazonInicio = document.getElementById('container-heart');
const main = document.querySelector('main');
// const audio = new Audio(['../multimedia/a-sky-full-of-stars-traducida-al-espanol.wav']);
const audio = document.querySelector('audio');
const audio2 = new Audio('../multimedia/audioWsp2.mp3');
const btnMusica =  document.getElementById('btn-musica');
const btnIngresarMusica = document.getElementById('btn-play');
const btnSinIngresarMusica = document.getElementById('btn-no-play');
const ponelePlay = document.getElementById('ponele-play');
const btnAudio = document.querySelector('#btn-audio');

inicioApp();

function inicioApp() {
    if(main.classList.contains('hidden')) {
        setTimeout( function() {
            ponelePlay.classList.remove('hidden');
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

btnIngresarMusica.addEventListener('click', () => {
    reproducirAudio();
    ponelePlay.classList.add('hidden');
    main.classList.remove('hidden');
});

btnAudio.addEventListener('click', () => {
    if(audio.played) {
        detenerAudio();
        audio2.play();
    }
})

btnSinIngresarMusica.addEventListener('click', () => {
    ponelePlay.classList.add('hidden');
    main.classList.remove('hidden');
})

function reproducirAudio() {
    audio.play();
}

function detenerAudio() {
    audio.pause();
}