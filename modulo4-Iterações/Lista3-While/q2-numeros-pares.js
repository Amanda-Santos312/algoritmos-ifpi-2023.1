//Leia N e escreva todos os números inteiros pares de 1 a N.
import {mostrar_texto, obter_numero_positivo} from '../input-utils.js'

function main() {
    mostrar_texto('\n----> NUMEROS PARES DE 1 A N <----')
    const n = obter_numero_positivo('\nValor para N: ')

    let contador = 1
    
    while (contador <= n) {
        if (contador % 2 === 0) {
            console.log(contador)
        }
        contador++
    }
}
main()