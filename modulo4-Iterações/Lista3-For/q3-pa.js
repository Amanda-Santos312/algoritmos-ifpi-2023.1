//Leia as variáveis A0, Limite e R e escreva os valores menores que Limite gerados pela Progressão Aritmética que tem por valor inicial A0 e razão R.
import {mostrar_texto, obter_numero_positivo} from '../input-utils.js'

function main() {
    mostrar_texto('\n----> PA <----')
    let a0 = obter_numero_positivo('\nA0: ')
    const limite = obter_numero_positivo('Valor final: ')
    const razao = obter_numero_positivo('Razao: ')

    for(a0; a0 <= limite; a0 = a0 + razao){
        console.log(a0)
    }
}

main()