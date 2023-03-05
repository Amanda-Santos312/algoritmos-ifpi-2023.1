//Leia uma velocidade em km/h, calcule e escreva esta velocidade em m/s. (Vm/s = Vkm/h / 3.6)
import {input} from '../io_utils.js'

function main() {
    //Entrada
    const velocidade_kmh = Number(input('Digite uma velocidade em km/h: '))

    //Processamento
    const velocidade_ms = velocidade_kmh / 3.6

    //Saída
    console.log(`A velocidade em m/s é ${velocidade_ms.toFixed(1)}`)
}
main()