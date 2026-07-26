let primeiro = document.getElementById("numero1")
let segundo = document.getElementById("numero2")
let botaos = document.getElementById("somar")
let botaob = document.getElementById("subtracao")
let botaod = document.getElementById("divisao")
let botaom = document.getElementById("multiplicacao")
let resultado = document.getElementById("resultado")


botaos.addEventListener("click", function () {
    let somar = Number(primeiro.value) + Number(segundo.value)
    resultado.textContent = somar
})

botaob.addEventListener("click", function () {
    let subtracao = Number(primeiro.value) - Number(segundo.value)
    resultado.textContent = subtracao
})

botaod.addEventListener("click", function() {
    let divisao = Number(primeiro.value) / Number(segundo.value)
    resultado.textContent = divisao
})

botaom.addEventListener("click", function () {
    let multiplicacao = Number(primeiro.value) * Number(segundo.value)
    resultado.textContent = multiplicacao
})