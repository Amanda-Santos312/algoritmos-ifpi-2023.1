import { mostrar_texto, obter_numero_positivo } from "../modulo5-Strings/input-output.js"

function main() {
    const consumo = obter_numero_positivo('Consumo: ')

    const valor_a_pagar = calcula_valor(consumo)

    mostrar_texto(`${valor_a_pagar}`)
}

function calcula_valor(consumo) {
    //Rodei e não consegui identificar o padrão para desenvolver
}
 
main()