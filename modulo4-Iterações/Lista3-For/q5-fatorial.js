//Leia um número, calcule e escreva seu fatorial.
import { obter_numero_positivo } from '../input-utils.js'

function main() {
    const n = obter_numero_positivo('\nNumero para descobrir o fatorial: ')
    let fatorial = 1
    let i = 1

    for (i; i <= n; i++) {
        fatorial = fatorial * i
    }
    console.log(`${n}! é ${fatorial}`)
}

main()