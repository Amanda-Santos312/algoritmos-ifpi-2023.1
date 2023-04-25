//Leia um número, calcule e escreva seu fatorial.
import { obter_numero_positivo } from '../input-utils.js'

function main() {
    let n = obter_numero_positivo('Numero para descobrir o fatorial: ')
    let fatorial = 1

    while (n >= 1) {
        fatorial = fatorial * n
        console.log(n --)
    }
    console.log(`\n${n}! é ${fatorial}`)
}

main()