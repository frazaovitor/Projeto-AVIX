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
    } else {
        document.querySelector('.corpo').style.display = 'none'
    }
}
