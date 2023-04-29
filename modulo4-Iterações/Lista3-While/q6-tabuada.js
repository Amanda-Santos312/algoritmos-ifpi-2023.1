import { mostrar_texto } from "../input-utils.js"

//Escreva a tabuada dos números de 1 a 10.
function main() {
    let numero = 1

    while (numero <= 10) {
        let multiplicador = 1

        mostrar_texto(`\n------> TABUADA DO NUMERO ${numero} <-------`)

        while(multiplicador <= 10){
            mostrar_texto(`${numero} x ${multiplicador} = ${numero*multiplicador}`)
            multiplicador++
        }
        numero++
    }
}

main()