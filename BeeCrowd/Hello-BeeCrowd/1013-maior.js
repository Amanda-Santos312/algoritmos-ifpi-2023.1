//Verifique qual é o maior numero entre três valores.
import {question} from 'readline-sync'

function main() {
    const a = Number(question('Valor para A: '))
    const b = Number(question('Valor para B: '))
    const c = Number(question('Valor para C: '))

    const maiorAB = verifica_maiorAB(a, b, c)
    const maior = verifica_maiorABC(maiorAB, c)

    console.log(`${maior} eh o maior`)
}

function verifica_maiorAB(a, b) {
    return (a + b + Math.abs(a - b)) / 2
}   // a = 1 e b = 2 > 1 - 2 = -1 > 3 + (-1) = 2 /2 = 1


function verifica_maiorABC(maiorAB, c) {
    return (maiorAB + c + Math.abs(maiorAB - c)) / 2
}


main()