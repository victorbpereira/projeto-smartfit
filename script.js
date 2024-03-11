const horas = new Date().getHours()
const minutos = new Date().getMinutes()
console.log(minutos)
const afid = document.querySelector('#afid')
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