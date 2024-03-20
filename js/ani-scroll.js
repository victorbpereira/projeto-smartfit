const secao = document.querySelectorAll('.js-scroll')
const metadeTela = window.innerHeight * 0.5

function scrollar() {
    secao.forEach((item) => {
        const topo = item.getBoundingClientRect().top - metadeTela
        if (topo < 0) {
            item.classList.add('animar')
        }
    })
}

scrollar()

window.addEventListener('scroll', scrollar)