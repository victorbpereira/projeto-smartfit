export default function animaScroll() {

    const a = document.querySelectorAll('nav a')
    const intro = document.querySelector('.introducao')
    const comunicado = document.querySelector('#afid')
    const plano = document.querySelectorAll('.plano-bloco')

    function aniComunicado() {
        comunicado.classList.add(comunicado.getAttribute('data-animacao'))
    }
    aniComunicado()

    function aniIntro() {
        intro.classList.add(intro.getAttribute('data-animacao'))
    }
    aniIntro()

    function aniNav() {
        a.forEach((i) => {
            i.classList.add(i.dataset.animacao)
        })
    }
    aniNav()

    function aniPlano() {
        if (window.innerWidth <= 900) {
            plano.forEach((i) => {
                i.classList.add(i.dataset.animacao)
            })
        } else {
            plano.forEach((i) => {
                i.dataset.animacao = ''
            })
        }
    }
    aniPlano()
}