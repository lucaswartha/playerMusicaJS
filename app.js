let musicas = [
    {titulo: 'Guitar Solo', artista: 'Reed Mathis', src: './songs/We Ride! - Reed Mathis.mp3', img: './img/rock.jpg'},
    {titulo: 'Sambo Solo', artista: 'The Mini Vandals', src: './songs/Ella Vater - The Mini Vandals.mp3', img: './img/samba.jpg'},
    {titulo: 'Piano Solo', artista: 'Track Tribe', src: './songs/A Brand New Start - TrackTribe.mp3', img: './img/piano.jpg'}
];
let musica = document.querySelector('audio');
let indexMusica = 0;

let barra = document.querySelector('progress');
let tempoDecorrido = document.querySelector('.inicio');
let imagem = document.querySelector('img');
let nomeMusica = document.querySelector('.descricao h2');
let nomeArtista = document.querySelector('.descricao i');

let duracaoMusica = document.querySelector('.fim')

renderizarMusica(indexMusica)

//events
const play = document.querySelector('.botao-play')
const pause = document.querySelector('.botao-pause')

document.querySelector('.anterior').addEventListener('click', () => {
    indexMusica--;
    if(indexMusica < 0) {
        indexMusica = 2;
    }
    renderizarMusica(indexMusica)
})

document.querySelector('.proxima').addEventListener('click', () => {
    indexMusica++;
    if(indexMusica > 2) {
        indexMusica = 0;
    }
    renderizarMusica(indexMusica)
})

play.addEventListener('click', tocarMusica)
pause.addEventListener('click', pausarMusica)

musica.addEventListener('timeupdate', atualizarBarra)

// functions
function renderizarMusica(index) {
    musica.setAttribute('src', musicas[index].src)
    musica.addEventListener('loadeddata', () => {
        nomeMusica.textContent = musicas[index].titulo
        nomeArtista.textContent = musicas[index].artista
        imagem.src = musicas[index].img
        duracaoMusica.textContent = segundosParaMinutos(Math.floor(musica.duration))
    })
}

function tocarMusica() {
    musica.play()
    pause.style.display = 'block'
    play.style.display = 'none'
}

function pausarMusica() {
    musica.pause()
    pause.style.display = 'none'
    play.style.display = 'block'
}

function atualizarBarra() {
    barra.style.width = Math.floor((musica.currentTime / musica.duration) * 100) + '%'
    tempoDecorrido.textContent = segundosParaMinutos(Math.floor(musica.currentTime))
}

function segundosParaMinutos(segundos) {
    let campoMinutos = Math.floor(segundos / 60)
    let campoSegundos = segundos % 60
    if (campoSegundos < 10) {
        campoSegundos = '0' + campoSegundos
    }

    return campoMinutos+':'+campoSegundos
}