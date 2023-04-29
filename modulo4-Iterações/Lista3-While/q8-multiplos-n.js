//Leia N , LimiteSuperior e LimiteInferior e escreva todos os múltiplos de N entre os limites lidos.
import {obter_numero_positivo} from '../input-utils.js'
import {eh_multiplo} from '../math-utils.js'

function main() {
    const n = obter_numero_positivo('N: ')
    const limite_minimo = obter_numero_positivo('Limite minimo: ')
    const limite_maximo = obter_numero_positivo('Limite maximo: ')

    let contador 

    while (n >= limite_minimo && n <= limite_maximo ){
        eh_multiplo
        contador++
    }
}


main()