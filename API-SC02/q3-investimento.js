import {obter_texto, obter_numero_positivo, mostrar_texto} from './input-utils.js'

function main() {
    mostrar_texto('-----> BANCO RENDE MAIS <-----')
    const objetivo = obter_texto('\nObjetivo: ')
    const valor_objetivo = obter_numero_positivo('\nValor do objetivo: ')
    const salario = obter_numero_positivo('\nSalario: ')
    const percentual = obter_numero_positivo('\nQuantos(%): ')
    const valor_percentual = percentual / 100
    const valor_aplicado = salario * valor_percentual
    const taxa_juros = obter_numero_positivo('\nTaxa entre 0.01 a 1.0: ')
    const rendimento_mensal = calcula_rendimento(valor_aplicado, taxa_juros)
    //const meses = verifica_tempo(valor_objetivo, rendimento_mensal)

    mostrar_texto(`\nObjetivo: ${objetivo}
    \nValor investido por mês: ${valor_aplicado}
    \nRendimento mensal: ${rendimento_mensal}
    \nMeses para atingir o objetivo: `) //${meses}
}


function calcula_rendimento(valor_aplicado, taxa_juros){
    const rendimento = valor_aplicado + (taxa_juros / 100) 

    return rendimento
}

function verifica_tempo(valor_objetivo, rendimento_mensal) {
    let meses = 0
    let soma_meses = 0

    while (rendimento_mensal < valor_objetivo) {
        soma_meses = soma_meses + meses
        meses++
    }
}



main()