/* Crie um programa que receba a idade de uma pessoa e 
calcule a sua frequência cardíaca máxima, que é dada pela fórmula 220 menos a idade. 
O programa deve então calcular a faixa de batimentos cardíacos ideais para atividades físicas moderadas e intensas, 
que correspondem a 50-70% e 70-85% da frequência cardíaca máxima, respectivamente. Os resultados devem ser exibidos na tela.  */

import {question} from 'readline-sync'

function main() {
    //Entrada
    const idade = Number(question('Digite sua idade: '))

    //Processamento
    const fc_max = calcula_fc_max(idade)

    const fc_ideal_ativ_moderada_min = calcula_fc_ideal_ativ_moderada_min(fc_max)
    const fc_ideal_ativ_moderada_max = calcula_fc_ideal_ativ_moderada_max(fc_max)

    const fc_ideal_ativ_intensa_min = calcula_fc_ideal_ativ_intensa_min(fc_max)
    const fc_ideal_ativ_intensa_max = calcula_fc_ideal_ativ_intensa_max(fc_max)

    //Saída
    console.log(`\nFrequência Cardíaca Maáxima ${fc_max}bpm\n`)

    console.log(`Frequência cardíaca mínima para atividade física moderada é de ${fc_ideal_ativ_moderada_min}bpm`)
    console.log(`Frequência cardíaca máxima para atividade física moderada é de ${fc_ideal_ativ_moderada_max}bpm\n`)

    console.log(`Frequência cardíaca mínima para atividade física intensa é de ${fc_ideal_ativ_intensa_min}bpm`)
    console.log(`Frequência cardíaca máxima para atividade física intensa é de ${fc_ideal_ativ_intensa_max}bpm`)
}

function calcula_fc_max(idade) { 
    return 220 - idade
}

function calcula_fc_ideal_ativ_moderada_min(fc_max) { 
    return 0.5 * fc_max 
}

function calcula_fc_ideal_ativ_moderada_max(fc_max) {
    return 0.7 * fc_max
}

function calcula_fc_ideal_ativ_intensa_min(fc_max) {
    return 0.7 * fc_max
}

function calcula_fc_ideal_ativ_intensa_max(fc_max) {
    return 0.85 * fc_max
}

main()