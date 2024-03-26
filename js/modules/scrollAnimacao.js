export default function animaScroll() {

    const a = document.querySelectorAll('nav a')
    const intro = document.querySelector('.introducao')
    const comunicado = document.querySelector('#afid')

    function aniComunicado() {
        comunicado.classList.add(comunicado.getAttribute('data-animacao'))
    }
    function aniIntro() {
        intro.classList.add(intro.getAttribute('data-animacao'))
    }
    function aniNav() {
        a.forEach((i) => {
            i.classList.add(i.dataset.animacao)
        })
    }

    aniComunicado()
    aniNav()
    aniIntro()
}