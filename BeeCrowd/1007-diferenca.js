//
import {question} from 'readline-sync'

function main() {
    const a = Number(question('Valor para A: '))
    const b = Number(question('Valor para B: '))
    const c = Number(question('Valor para C: '))
    const d = Number(question('Valor para D: '))

    const calculo = calcula_diferenca(a, b, c, d)

    console.log(`DIFERENCA = ${calculo}`)
}

function calcula_diferenca(a, b, c, d) {
    return (a * b) - (c * d)
}

main()