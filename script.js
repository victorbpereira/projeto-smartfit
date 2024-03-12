const horas = new Date().getHours()
const minutos = new Date().getMinutes()
console.log(minutos)
const afid = document.querySelector('#afid')
if (((horas >= 6) && (horas < 12)) || ((horas >= 14) && (horas < 22))) {
    afid.innerHTML = '<p>UNIDADE <span>ABERTA</span></p>'
    afid.classList.add('aberta')
} else if ((horas >= 12) && (horas <= 13)) {
    afid.innerHTML = '<p>UNIDADE <span>FECHADA</span> | VOLTAREMOS A FUNCIONAR 14H</p>'
    afid.classList.add('fechada')
} else {
    afid.innerHTML = '<p>UNIDADE <span>FECHADA</span> | VOLTAREMOS A FUNCIONAR 6H</p>'
    afid.classList.add('fechada')
}