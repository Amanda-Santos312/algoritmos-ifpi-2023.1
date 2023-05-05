//Multiplique dois valores e imprima na variavel prod.
import {question} from 'readline-sync'

function main() {
    const a = Number(question('\nValor para a: '))
    const b = Number(question('Valor para b: '))

    const produto = calcula_produto(a, b)

    console.log(`PROD = ${produto}`)
}

function calcula_produto(a, b) {
    return (a * b)
}

main()