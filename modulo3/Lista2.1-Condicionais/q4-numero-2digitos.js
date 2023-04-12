//Leia 1 (um) número de 2 (dois) dígitos, verifique e escreva se o algarismo da dezena é igual ou diferente do algarismo da unidade.
import {question} from 'readline-sync'

function main(){
    const numero = Number(question('Digite um nÚmero de 2 dígitos: '))

    const algarismos = verifica_algarismmos(numero)

    console.log(`\n${algarismos}`)
}

function verifica_algarismmos(numero) {
    const dezena = Math.floor(numero / 10)
    const unidade = numero % 10

    console.log(`Dezena: ${dezena}`)
    console.log(`Unidade: ${unidade}`)

    if (dezena == unidade){
        return 'Dezena é igual a unidade!'
    } else {
        return 'Dezena e Unidade são diferentes!'
    }
}

main()