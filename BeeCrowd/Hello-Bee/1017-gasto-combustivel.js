//Calcule o gasto necessário para uma viagem de acordo com o tempo gasto e a velocidade média.
import {question} from 'readline-sync'

function main() {
    const tempo_gasto = Number(question('\nTempo gasto na viagem: '))
    const velocidade_media = Number(question('Velocidade media: '))

    const distancia = tempo_gasto * velocidade_media
    const litros_necessario = distancia / 12

    console.log(`\nLitros necessário para realizar a viagem: ${litros_necessario.toFixed(3)} l`)
}

main()