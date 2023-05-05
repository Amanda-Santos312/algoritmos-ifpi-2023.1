//Some dois valores e imprima na variavel soma.
import {question} from 'readline-sync'

function main() {
    const a = Number(question('\nValor para a: '))
    const b = Number(question('Valor para b: '))

    const soma = calcula_soma(a, b)

    console.log(`SOMA = ${soma}`)
}

function calcula_soma(a, b) {
    return (a + b)
}
main()