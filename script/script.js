document.onreadystatechange = function () {
    if (document.readyState === "complete") {

        // CAROUSEL
        $(document).ready(function () {
            $('.carousel').slick({
                autoplay: true,
                dots: false,
                arrows: false,
                infinite: true,
                pauseOnHover: false,
                speed: 1000,
                fade: true,
                cssEase: 'linear',
            });
        });

        document.querySelector('.carregando').style.display = 'none'
        document.querySelector('.corpo').style.display = 'block'

        formEnviado()

    } else {
        // carregando conteúdo
        document.querySelector('.corpo').style.display = 'none'
        carousel = document.querySelectorAll('#carousel')

        if (window.screen.width <= 425) {
            for (i = 0; i < carousel.length; i++) {
                carousel[i].src = `img/carousel${i + 1}-P.webp`
            }
        } else {
            false
        }
    }
}

function formEnviado() {
    verificado = document.querySelector('#formulario')
    verificado.addEventListener('submit', () => {
        alert("Obrigado! Seua dados foram enviados com sucesso!")
    })
}