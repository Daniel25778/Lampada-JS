"use strict"

const lampada = document.getElementById("Lampada")
let idInterval

function botoesLigaDesliga(ligarEstado, desligarEstado, piscarEstado) {

    const ligar = document.getElementById("Ligar")
    const desligar = document.getElementById("desligar")
    const piscar = document.getElementById("piscar")
    ligar.disabled = ligarEstado
    desligar.disabled = desligarEstado
    piscar.disabled = piscarEstado

}

function LigarLampada() {
    if (!lampadaQuebrada()) {
        lampada.src = "img/ligada.jpg"
        botoesLigaDesliga(true, false, false)

    }

}

function DesligarLampada() {
    if (!lampadaQuebrada()) {
        lampada.src = "img/desligada.jpg"
        botoesLigaDesliga(false, true, false)
    }

}

function quebrarLampada() {
    lampada.src = "img/quebrada.jpg"
    botoesLigaDesliga(true, true, true)


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
        piscar.classList.add("piscarDesligado")
        piscar.classList.remove("piscarLigado")
        idInterval = setInterval(trocarImagem, 1000)
        piscar.textContent = "Parar"
    } else {

        clearInterval(idInterval)
        piscar.classList.remove("piscarDesligado")
        piscar.classList.add("piscarLigado")
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