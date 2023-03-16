//Leia uma velocidade em m/s, calcule e escreva esta velocidade em km/h. (Vkm/h = Vm/s * 3.6)
import {input} from '../io_utils.js'

function main () {
    //Entrada
    const velocidade_ms = Number(input('Digite um velocidade em ms: '))

    //Processamento
    const velocidade_kmh = velocidade_ms * 3.6

    //Saída
    console.log(`A velocidade em km/h é ${velocidade_kmh}`)
}
main()