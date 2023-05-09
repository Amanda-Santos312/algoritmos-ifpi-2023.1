//Calcule o consumo médio de acordo com a distancia total e o combsutivel gasto.
import {question} from 'readline-sync'

function main() {
    const distancia_total = Number(question('\nDistancia total percorrida: '))
    const combustivel_gasto = Number(question('Total de combustivel gasto: '))

    const consumo_medio = calcula_consumo_medio(distancia_total, combustivel_gasto)

    console.log(`\nConsumo Médio: ${consumo_medio.toFixed(3)} km/l`)
}

function calcula_consumo_medio(distancia_total, combustivel_gasto) {
    return distancia_total / combustivel_gasto
}

main()