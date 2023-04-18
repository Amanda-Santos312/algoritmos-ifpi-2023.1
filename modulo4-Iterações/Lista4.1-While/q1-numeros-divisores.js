/*Leia uma lista de números e que para cada número lido, escreva o próprio número e a relação de seus divisores. 
(flag número = 0). */
import {question} from 'readline-sync'

function main() {
    //Estado Inicial
    let numero = Number(question('Digite um numero inteiro: '))

    while (numero != 0) {
        divisores(numero)
        numero = Number(question('Digite um numero inteiro: '))
    }
    console.log(`Colocou 0 e encerrou!`)
}

function divisores(numero) {
    let candidato = numero

    while (candidato >= 1) {
        if(eh_divisor(candidato, numero)) {
            console.log(`${candidato}`)
        }
        candidato = candidato - 1
    }
}    

function eh_divisor(candidato, numero) {
    return numero % candidato === 0
}

main()