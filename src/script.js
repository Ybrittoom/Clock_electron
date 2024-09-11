
// codigo do relogio digital
const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');


const relogio = setInterval(function time() {
    let dateToday = new Date();
    let hr = dateToday.getHours();
    let mn = dateToday.getMinutes();
    let sg = dateToday.getSeconds();


    if (hr < 10) hr = '0' + hr;

    if (mn < 10) mn = '0' + mn;

    if (sg < 10) sg = '0' + sg;
    
    
    horas.textContent = hr;
    minutos.textContent = mn;
    segundos.textContent = sg;


})




//codigo do bar title 

const { ipcRenderer } = require("electron");

document.querySelector("#close").addEventListener("click", () => {
    ipcRenderer.send("manualClose");
})

document.querySelector("#minimize").addEventListener("click", () => {
    ipcRenderer.send("manualMinimize");
})

document.querySelector("#maximize").addEventListener("click", () => {
    ipcRenderer.send("manualMaximize");
})