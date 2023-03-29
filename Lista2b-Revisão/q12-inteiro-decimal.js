/*  Leia um número e escreva se o número é inteiro ou decimal. */
import {question} from 'readline-sync'

function main() {
    const numero = question('Digite um número: ').split('.').map(Number)

    const tipo = verifica_numero(numero)

    console.log(`Esse numero é ${tipo}`)
}

function verifica_numero(numero) {
    if (numero % 1 === 0) {
        return 'Inteiro'
    } else {
        return 'Decimal'
    }
}

main()