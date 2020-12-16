
logoImg = document.querySelector('#logo-img')
titulo = document.querySelector('#titulo')
h1 = document.querySelectorAll('.h1-1')
banner = document.querySelector('.banner')

addEventListener('scroll', () => {
    if (pageYOffset >= 100) {
        titulo.classList.add('headerDinamico')
        logoImg.classList.add('imgLogoDinamico')
        logoImg.src = 'img/avixLogo2.png'
        h1Dinamico.classList.add('tituloDinamico')
        h1Dinamico2.classList.add('tituloDinamico')
    } else {
        titulo.classList.remove('headerDinamico')
        logoImg.classList.remove('imgLogoDinamico')
        logoImg.src = 'img/avixLogo.png'
        h1Dinamico.classList.remove('tituloDinamico')
        h1Dinamico2.classList.remove('tituloDinamico')
    }
})

// addEventListener('load', () => {
    
//     setInterval(() => {
        
//         banner.classList.add('banner2')
//         fadeIn(banner2)
//     }, 2000)
// })

// function fadeIn(fade) {
//     setInterval(() => {
//         for (i = 0; i < 1; i++) {
//             fade.opacity = i
//         }
//     },100)
// }

// setInterval(() => {
//     fadeIn(banner)
// })