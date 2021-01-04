background = document.querySelectorAll('#bg')
console.log(background)

bg = 0
tempoSlide = 3000
function slide() {

    setInterval(() => {
        console.log(bg + 'atual')
        background[bg].classList.add('fade-out')
        bg++
        if (bg == 4) {
            bg = 0
            for (i = 0; i < background.length; i++) {
                background[i].classList.remove('fade-out')
            }


        }
    }, tempoSlide)
}
slide()






