//
import {mostrar_texto, obter_numero_positivo} from './input-utils.js'

function main() {
    mostrar_texto('\n-----> GASTO DA SUA PISCINA <-----')
    const l = obter_numero_positivo('\nlargura: ')
    const c = obter_numero_positivo('comprimento: ')
    const p = obter_numero_positivo('profundidade: ')
    const valor_cada_mil_litros = obter_numero_positivo('Valor para cada 1000l: ')

    const capacidade = calcula_capacidade(l, c, p)
    const recomendado = capacidade * 0.85
    const gasto_litros = calcula_valor(valor_cada_mil_litros, recomendado)
    const litros_reposicao = recomendado * 0.1
    const gasto_reposicao = calcula_valor_reposicao(valor_cada_mil_litros, litros_reposicao)
    const gasto_total = calcula_total(gasto_litros, gasto_reposicao)

    console.log(`\nCapacidade máxima: ${capacidade} litros`)
    console.log(`Deve encher até: ${recomendado} litros`)
    console.log(`Valor da água gasta: ${gasto_litros}`)
    console.log(`Litros Reposição: ${litros_reposicao}`)
    console.log(`Total a pagar por mês: ${gasto_total} `)
}   

function calcula_capacidade(l, c, p) {
    const valor = l * c * p
    return valor / 1000
}


function calcula_valor(recomendado, valor_litros) {
    return recomendado / 1000 * valor_litros //
}


function calcula_valor_reposicao(valor_litros,litros_reposicao) {
    return 
}


function calcula_total(gasto_litros, gasto_reposicao) {
    return gasto_litros + gasto_reposicao
}

main()