export default function abertura() {
    const horas = new Date().getHours()
    const afid = document.querySelector('#afid')
    const diaSemana = new Date().getDay()
    const meidSemana = ((diaSemana >= 1) && (diaSemana <= 5))
    const sabado = (diaSemana === 6)
    const domingo = (diaSemana === 0)

    if (meidSemana) {
        if (((horas >= 6) && (horas < 12)) || ((horas >= 14) && (horas < 22))) {
            afid.innerHTML = '<p>UNIDADE <span id="a">ABERTA</span></p>'
            afid.classList.add('aberta')
        } else if ((horas >= 12) && (horas < 14)) {
            afid.innerHTML = '<p>UNIDADE <span id="f">FECHADA</span> | VOLTAREMOS A FUNCIONAR <span class="ahoras">14h</span></p>'
            afid.classList.add('fechada')
        } else {
            afid.innerHTML = '<p>UNIDADE <span id="f">FECHADA</span> | VOLTAREMOS A FUNCIONAR <span class="ahoras">6h</span></p>'
            afid.classList.add('fechada')
        }
    } 
    else if (sabado) {
        if ((horas >= 9) && (horas < 12)) {
            afid.innerHTML = '<p>UNIDADE <span id="a">ABERTA</span></p>'
            afid.classList.add('aberta')
        }
    }
    else if (domingo) {
        afid.innerHTML = '<p>UNIDADE <span id="f">FECHADA</span> | VOLTAREMOS A FUNCIONAR SEGUNDA-FEIRA <span class="ahoras">6h</span></p>'
        afid.classList.add('fechada')
    }
}