/* Leia um número inteiro (3 dígitos), calcule e escreva a soma do número com seu inverso. 
(Ex.: número = 532 ; inverso = 235 ; soma = 532 + 235 = 767). */
import {question} from 'readline-sync'

function main() {
    //Entrada
    const numero = Number(question('Digite um número de 3 digítos: '))

    //Processamento
    const centena = verifica_centena(numero)
    const resto_centena = verifica_resto(numero)
    const dezena = verifica_dezena(resto_centena)
    const unidade = verifica_unidade(resto_centena)

    const inverso = vira_numero(centena, dezena, unidade)

    const soma = numero + inverso

    //Saída
    console.log(`O inverso de ${numero} é ${inverso}`)
    console.log(`A soma entre o número e o seu inverso é ${soma}`)

}

function verifica_centena(numero) {
    return Math.floor(numero / 100)
}

function verifica_resto(numero) {
    return numero % 100
}

function verifica_dezena(resto_centena) {
    return Math.floor(resto_centena / 10)
}

function verifica_unidade(resto_centena) {
    return resto_centena % 10
}

function vira_numero(centena, dezena, unidade) {
    return (unidade * 100) + (dezena * 10) + (centena * 1)
}

main()