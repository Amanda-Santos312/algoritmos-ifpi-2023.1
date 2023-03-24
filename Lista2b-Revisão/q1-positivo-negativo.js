/* Leia um número e mostre na tela se o número é positivo ou negativo. */
import {question} from 'readline-sync'

function main() {
    const numero = Number(question('Digite um numero: '))

    const tipo = verifica_numero(numero)

    console.log(`\nO numero é ${tipo}.`)
}

function verifica_numero(numero) {
    if (numero >= 0) {
        return 'Positivo'
    } else {
        return 'Negativo'
    }
}

main()