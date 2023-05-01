import {mostrar_texto, obter_numero_positivo} from './input-utils.js'

function main() {
    mostrar_texto('\n-----> GASTO DA SUA PISCINA <-----')
    const l = obter_numero_positivo('\nlargura: ')
    const c = obter_numero_positivo('comprimento: ')
    const p = obter_numero_positivo('profundidade: ')
    const valor_cada_mil_litros = obter_numero_positivo('Valor para cada 1000l: ')

    const capacidade = calcula_capacidade(l, c, p)
    const recomendado = capacidade * 0.85
    const gasto_litros = calcula_valor(recomendado, valor_cada_mil_litros)
    const litros_reposicao = recomendado * 0.1
    const gasto_reposicao = calcula_valor_reposicao(valor_cada_mil_litros, litros_reposicao) //Não ficou do jeito que eu queria :(
    const gasto_mensal = calcula_total(gasto_litros, gasto_reposicao) //Consequentemente, esse valor não vai ficar certo

    mostrar_texto(`\nCapacidade máxima: ${capacidade} l
    \nCapacidade recomendada: ${recomendado} l
    \nValor gasto com o recomendado: R$ ${gasto_litros}
    \nLitros de reposição: ${litros_reposicao.toFixed(1)} l
    \nValor da reposição: R$ ${gasto_reposicao.toFixed(2)}
    \nTotal a pagar por mês: ${gasto_mensal.toFixed(2)} reais`)
}   

function calcula_capacidade(l, c, p) {
    const valor = l * c * p
    return valor / 1000
}


function calcula_valor(recomendado, valor_cada_mil_litros) {
    if (recomendado <= 1000) {
        return valor_cada_mil_litros 
    } else { //recomendado > 1000
        const parte_inteira = Math.floor(recomendado / 1000)
        return (parte_inteira * valor_cada_mil_litros) + 1000 //para o resto
    }
}  


function calcula_valor_reposicao(litros_reposicao, valor_cada_mil_litros) {
    if (litros_reposicao <= 1000){
        return valor_cada_mil_litros
    } else {
        const valor = Math.floor(litros_reposicao / 1000)
        return (valor * valor_cada_mil_litros) + 1000
    }
}


function calcula_total(gasto_litros, gasto_reposicao) {
   return gasto_litros + gasto_reposicao
}

main()