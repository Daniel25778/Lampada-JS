"use strict"

const lampada = document.getElementById("Lampada")
let idInterval

function botoesLigaDesliga(ligarEstado, desligarEstado) {

    const ligar = document.getElementById("Ligar")
    const desligar = document.getElementById("desligar")
    ligar.disabled = ligarEstado
    desligar.disabled = desligarEstado

}

function LigarLampada() {
    if (!lampadaQuebrada()) {
        lampada.src = "img/ligada.jpg"
        botoesLigaDesliga(true, false)

    }

}

function DesligarLampada() {
    if (!lampadaQuebrada()) {
        lampada.src = "img/desligada.jpg"
        botoesLigaDesliga(false, true)
    }

}

function quebrarLampada() {
    lampada.src = "img/quebrada.jpg"
    botoesLigaDesliga(true, true)


}

// function lampadaDesligada() {
//     return lampada.src.includes("desligada")
// }
//Function arrow

const lampadaDesligada = () => lampada.src.includes("desligada")

function trocarImagem() {
    if (lampadaDesligada()) {
        LigarLampada()
    } else {
        DesligarLampada()
    }
}

// function lampadaQuebrada() {
//     return lampada.src.indexOf("quebrada") !== -1
// }
//Function arrow

const lampadaQuebrada = () => lampada.src.indexOf("quebrada") !== -1

function piscar() {
    const piscar = document.getElementById("piscar")

    if (piscar.textContent == "Piscar") {
        idInterval = setInterval(trocarImagem, 1000)
        piscar.textContent = "Parar"
    } else {
        clearInterval(idInterval)
        DesligarLampada()
        piscar.textContent = "Piscar"

    }

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

document.getElementById("piscar")
    .addEventListener("click", piscar)