const { banco } = require("./BANCO DE MISSOES");
const prompt = require("prompt-sync")();

function Gerarmissoes (pergunta, banco,){
    if (pergunta === "Gerar missoes") {
       let sorteio = Math.floor(Math.random() * banco.length)
       let r = Math.floor(Math.random() * 10)
       banco.push({
        titulo: banco[sorteio],
        recompensa: r,
        concluida: false
       })
       console.log(banco[sorteio])
       }
    } 

    function adicionarmissao (pergunta, banco,) {
        if (pergunta === "Adicionar missao") {
            let t = prompt("qual nome da missao??")
            let r = Number(prompt("qual valor da recompensa?"))
            banco.push({
                titulo: t,
                recompensa: r,
                concluida: false
            }) 
            for (let y = 0; y < banco.length; y++) {
                if (banco[y].titulo === t) {
                    console.log("nova missao adicionada", banco[y])
                }
            }
        }
    }

    function mostrarmissoes (pergunta, banco) {
        if (pergunta === "mostrar missoes") {
            console.log(banco)
        }
    }


    function removermissao (pergunta, banco,) {
        if (pergunta === "remover missao") {
            let p = prompt("qual missao voce quer remover?").trim()
            let r = banco.findIndex(banco => banco.titulo === p)
            banco.splice(r, 1)
            console.log(banco)
        }
    }

    function procurarmissao (pergunta, banco,) {
        if (pergunta === "procurar missao") {
            let i = prompt("qual missao voce esta procurando?").trim()
            for (let y = 0; y < banco.length; y++) {
                if (banco[y].titulo === i) {
                    console.log("missao encontrada", banco[y].titulo) 
                }
            }
        }
    } 
    
    function sair (pergunta, ) {
        if (pergunta === "sair") {
            console.log("saindooooo...")
        }
    }



    module.exports = {
        Gerarmissoes,
        adicionarmissao,
        mostrarmissoes,
        removermissao,
        procurarmissao,
        sair,
    }