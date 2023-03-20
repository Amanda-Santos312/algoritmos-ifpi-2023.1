//Leia 1 (um) número inteiro e escreva se este número é par ou impar.
import {question} from 'readline-sync'

function main() {
    const numero = Number(question('Digite um numero: '))

    const numero_eh = par_impar(numero)

    console.log(`Esse numero é ${numero_eh}`)
}

function par_impar(numero) {
    if (numero % 2 == 0) {
        return 'par!'
    } else {
        return 'impar!'
    }
}

main()