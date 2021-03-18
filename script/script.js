tamanhoTela = window.innerWidth

background = document.querySelectorAll('#bg')
bg = 0
tempoSlide = 3000

function slide() {

    setInterval(() => {
        background[bg].classList.add('fade-out')
        bg++
        if (bg == background.length) {
            bg = 0
            for (i = 0; i < background.length; i++) {
                background[i].classList.remove('fade-out')
            }
        }
    }, tempoSlide)
}
slide()

async function mudarImagem() {
    if (tamanhoTela >= 700) {
        document.querySelector('.bg1').setAttribute('src', 'img/carousel01-G.jpg');
        document.querySelector('.bg2').setAttribute('src', 'img/carousel02-G.jpg');
        document.querySelector('.bg3').setAttribute('src', 'img/carousel03-G.jpg');
        document.querySelector('.bg4').setAttribute('src', 'img/carousel04-G.jpg');
    }else{
        return false
    }
}

mudarImagem()








