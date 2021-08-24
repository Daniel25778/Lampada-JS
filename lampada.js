"use strict"

function botoesLigaDesliga(ligarEstado, desligarEstado) {
    const ligar = document.getElementById("Ligar")
    const desligar = document.getElementById("desligar")
    ligar.disabled = ligarEstado
    desligar.disabled = desligarEstado
}

function LigarLampada() {
    const lampada = document.getElementById("Lampada")

    if (!lampadaQuebrada()) {
        lampada.src = "img/ligada.jpg"
        botoesLigaDesliga(true, false)

    }

}

function DesligarLampada() {
    const lampada = document.getElementById("Lampada")

    if (!lampadaQuebrada()) {
        lampada.src = "img/desligada.jpg"
        botoesLigaDesliga(false, true)
    }

}

function quebrarLampada() {
    const lampada = document.getElementById("Lampada")
    lampada.src = "img/quebrada.jpg"
    botoesLigaDesliga(true, true)


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