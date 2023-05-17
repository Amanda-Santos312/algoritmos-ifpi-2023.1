//Leia um número N, some todos os números inteiros entre 1 e N e escreva o resultado obtido.
import {obter_numero_positivo} from '../input-utils.js'

function main() {
    const n = obter_numero_positivo('Numero: ')

    let contador = 1
    let somatorio = 0

    while (contador <= n) {
        somatorio = somatorio + contador
        console.log(contador)

        contador++
    }
    console.log(`A soma de 1 a ${n} é ${somatorio}`)
    
}

main()