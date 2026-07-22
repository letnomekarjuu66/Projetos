const prompt = require("prompt-sync")();
const {Gerarmissoes, adicionarmissao, mostrarmissoes, removermissao, procurarmissao, sair,} = require("./funçoes")
const {banco, } = require("./BANCO DE MISSOES")

let pergunta;

while (pergunta !== "sair") {

console.log("Mostrar missões")
console.log("Adicionar missão")
console.log("Remover missão")
console.log("Procurar missão")
console.log("Gerar missão aleatória")
console.log("Sair")

pergunta = prompt("qual opiçao??").trim()

mostrarmissoes(pergunta, banco)

Gerarmissoes(pergunta, banco,)

adicionarmissao(pergunta, banco)

removermissao(pergunta, banco, )

procurarmissao(pergunta, banco,)

sair(pergunta)
}


module.exports = {


}