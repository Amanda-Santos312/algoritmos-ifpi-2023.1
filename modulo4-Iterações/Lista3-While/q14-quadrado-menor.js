//Leia N, calcule e escreva o maior quadrado menor ou igual a N. Por exemplo, se N for igual a 38, o maior quadrado menor que 38 é 36 (quadrado de 6).
import {obter_numero_positivo, mostrar_texto} from '../input-utils.js'

function main() {
    mostrar_texto('----> VERIFICA O MENOR QUADRADO DE UM DETERMINADO LIMITE <----')
    const limite = obter_numero_positivo('\nAte qual valor para verificar: ')
    let numero = 0

    while(numero * numero <= limite) {
        numero++
    }

    numero = numero - 1
    const quadrado = numero * numero

    mostrar_texto(quadrado)

}
main()