//Leia um número, calcule e escreva seu fatorial.
import { obter_numero_positivo } from '../input-utils.js'

function main() {
    let n = obter_numero_positivo('\nNumero para descobrir o fatorial: ')
    let fatorial = 1
    let i =1

    while (i <= n) {
        fatorial = fatorial * i
        i++
    }
    console.log(`\n${n}! é ${fatorial}`)
}

main()