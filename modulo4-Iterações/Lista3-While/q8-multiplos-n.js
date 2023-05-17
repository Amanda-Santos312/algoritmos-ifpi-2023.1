//Leia N , LimiteSuperior e LimiteInferior e escreva todos os múltiplos de N entre os limites lidos.
import {obter_numero_positivo} from '../input-utils.js'

function main() {
    const n = obter_numero_positivo('N: ')
    const inicio = obter_numero_positivo('Limite minimo: ')
    const fim = obter_numero_positivo('Limite maximo: ')

    let contador = inicio

    while (n >= inicio && n <= fim){
        console.log(n)
        contador++
    }
}


main()