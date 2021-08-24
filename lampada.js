"use strict"


function LigarLampada() {
    const lampada = document.getElementById("Lampada")
    const ligar = document.getElementById("Ligar")
    const desligar = document.getElementById("desligar")

    if (!lampadaQuebrada()) {
        lampada.src = "img/ligada.jpg"
        ligar.disabled = true
        desligar.disabled = false
    }

}

function DesligarLampada() {
    const lampada = document.getElementById("Lampada")
    const ligar = document.getElementById("Ligar")
    const desligar = document.getElementById("desligar")

    if (!lampadaQuebrada()) {
        lampada.src = "img/desligada.jpg"
        ligar.disabled = false
        desligar.disabled = true
    }

}

function quebrarLampada() {
    const lampada = document.getElementById("Lampada")
    const ligar = document.getElementById("Ligar")
    const desligar = document.getElementById("desligar")
    lampada.src = "img/quebrada.jpg"
    ligar.disabled = true
    desligar.disabled = true

}



function lampadaQuebrada() {
    return document.getElementById("Lampada").src.indexOf("quebrada") !== -1
}



//Eventos

document.getElementById("Ligar")
    .addEventListener("click", LigarLampada)

document.getElementById("desligar")
    .addEventListener("click", DesligarLampada)

document.getElementById("Lampada")
    .addEventListener("dblclick", quebrarLampada)

document.getElementById("Lampada")
    .addEventListener("pointerover", LigarLampada)

document.getElementById("Lampada")
    .addEventListener("mouseleave", DesligarLampada)