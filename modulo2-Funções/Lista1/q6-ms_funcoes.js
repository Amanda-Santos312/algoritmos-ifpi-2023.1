//Leia uma velocidade em km/h, calcule e escreva esta velocidade em m/s. (Vm/s = Vkm/h / 3.6)
import {question} from 'readline-sync'

function main() {
    //Entrada
    const velocidade_kmh = Number(question('Digite uma velocidade em km/h: '))

    //Processamento
    const velocidade_ms = transforma_km_ms(velocidade_kmh)

    //Saída
    console.log(`\nA velocidade em m/s é ${velocidade_ms.toFixed(1)}`)
}

function transforma_km_ms(velocidade_kmh) {
    return velocidade_kmh / 3.6
}

main()