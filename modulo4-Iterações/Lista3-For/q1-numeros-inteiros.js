//Leia N e escreva todos os números inteiros de 1 a N.
import {mostrar_texto, obter_numero_positivo} from '../input-utils.js'

function main() {
    mostrar_texto('\n----> NUMEROS INTEIROS DE 1 A N <----')
    const n = obter_numero_positivo('\nValor para N: ')

    for(let i =  1; i <= n; i++) {
        console.log(i)
    }


}

main()