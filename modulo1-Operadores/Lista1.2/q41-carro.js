/* O custo ao consumidor de um carro novo é a soma do custo de fábrica com a percentagem do distribuidor e dos impostos (aplicados ao custo de fábrica). 
Supondo que a percentagem do distribuidor seja de 28% e os impostos de 45%, 
escreva um algoritmo que leia o custo de fábrica de um carro e escreva o custo ao consumidor. */
import {question} from 'readline-sync'

function main() { 
    //Entrada
    const custo_fabrica = Number(question('Valor para custo o de fabrica: '))

    //Processamento 
    const percentagem_distribuidor = 0.28 * custo_fabrica
    const impostos = 0.45 * custo_fabrica

    const custo_carro = custo_fabrica + percentagem_distribuidor + impostos

    //Saída
    console.log(`Percentagem do distribuidor é de $${percentagem_distribuidor.toFixed(2)}`)
    console.log(`Valor dos impostos: $${impostos.toFixed(2)}`)
    console.log(`O custo do consumidor será de $${custo_carro.toFixed(2)} `)
}
main()
