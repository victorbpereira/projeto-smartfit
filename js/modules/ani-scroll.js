const secao = document.querySelectorAll('[data-scroll]')
console.log(secao)
const metadeTela = window.innerHeight * 0.5

export default function scrollar() {
    secao.forEach((item) => {
        const topo = item.getBoundingClientRect().top - metadeTela
        if (topo < 0) {
            item.classList.add('animar')
        }
    })
}

window.addEventListener('scroll', scrollar)