//Calcule a soma de dois valores
import {question} from 'readline-sync'

function main() {
    const a = Number(question('\nValor para a: '))
    const b = Number(question('Valor para b: '))

    const x = calcula_soma(a, b)

    console.log(`X = ${x}`)
}

function calcula_soma(a, b) {
    return a + b
}

main()