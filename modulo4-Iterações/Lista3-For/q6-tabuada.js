//Leia as variáveis A0, Limite e R e escreva os valores menores que Limite gerados pela Progressão Geométrica que tem por valor inicial A0 e razão R.
import { mostrar_texto, obter_numero_positivo } from '../input-utils.js'

function main() {
    let numero = 1

    for (numero; numero <= 10; numero++) {
        let multiplicador = 1

        mostrar_texto(`\n -------> TABUADA DO NUMERO ${numero} <-------`)

        for (multiplicador; multiplicador <= 10; multiplicador++) {
            mostrar_texto(`${numero} x ${multiplicador} = ${numero*multiplicador}`)

        }
    }   
}

main()