//
import {question} from 'readline-sync'

function main() {
    const vendedor = question('Nome do vendedor: ')
    const salario_fixo = Number(question('Valor fixo: '))
    const total_vendas = Number(question('Total de vendas: '))

    const comissao = calcula_comissao(salario_fixo, total_vendas)

    console.log(`Total: ${comissao.toFixed(2)}`)
}

function calcula_comissao(salario_fixo, total_vendas) {
    return (total_vendas * 0.15) + salario_fixo
}

main()