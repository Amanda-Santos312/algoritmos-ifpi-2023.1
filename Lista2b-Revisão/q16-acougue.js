/* O Hipermercado Tabajara está com uma promoção de carnes que é imperdível. Confira:
          Até 5 Kg                         Acima de 5 Kg
File      R$ 4,90 por Kg                   R$ 5,80 por Kg
Alcatra   R$ 5,90 por Kg                   R$ 6,80 por Kg
Picanha   R$ 6,90 por Kg                   R$ 7,80 por Kg

Para atender a todos os clientes, cada cliente poderá levar apenas um dos tipos de carne da promoção, 
porém não há limites para a quantidade de carne por cliente. Se compra for feita no cartão Tabajara o 
cliente receberá ainda um desconto de 5% sobre o total a compra. Escreva um programa que peça o tipo 
e a quantidade de carne comprada pelo usuário e gere um cupom fiscal, contendo as informações da 
compra: tipo e quantidade de carne, preço total, tipo de pagamento, valor do desconto e valor a pagar. */
import {question} from 'readline-sync'

function main() {
    const carne = question('\nFile - F, Alcatra - A ou Picanha-P: ')
    const qtd = Number(question('Quantos kg? '))
    const pagamento = question('Dinheiro-D ou Cartao Tabajara - T? ')
    
    const tipo_carne = verifica_tipo_carne(carne)
    const valor_carne = calcula_preco_carne(carne, qtd)
    const tipo_pagamento = verifica_tipo_pagamento(pagamento)
    const desconto = calcula_desconto(valor_carne)
    const valor_a_pagar = calcula_preco_final(valor_carne, desconto)

    console.log(`\n-----------> NOTA FISCAL <-------------`)
    console.log(`\nTipo de Carne: ${tipo_carne}`)
    console.log(`Quantidade (kg): ${qtd}`)
    console.log(`Preço Total: R$ ${valor_carne}`)
    console.log(`Tipo de pagamento: ${tipo_pagamento}`)
    console.log(`Valor do desconto: ${desconto}`)
    console.log(`Valor a pagar: R$ ${valor_a_pagar}`)

}

function verifica_tipo_carne(carne) {
    if (carne === 'F') {
        return 'FILE'
    } else if (carne === 'A') {
        return 'ALCATRA'
    } else {
        return 'PICANHA'
    }
}

function calcula_preco_carne(tipo_carne, qtd) {
    if (tipo_carne === 'FILE') {
        if (qtd <= 5) {
            return (4.9 * qtd)
        } else {
            return (5.8 * qtd)
        }  
    } else if (tipo_carne === 'ALCATRA') {
        if (qtd <= 5) {
            return (5.9 * qtd)
        } else {
            return (6.8 * qtd)
        }
    } else {  //Picanha: 
        if (qtd <= 5) {
            return (6.9 * qtd)
        } else {
            return (7.8 * qtd)
        }
    }
}

function verifica_tipo_pagamento(pagamento) {
    if (pagamento === 'T') {
        return 'CARTÃO TABAJARA'
    } else if (pagamento === 'D'){
        return 'DINHEIRO'
    } else {
        return 'Opção não corresponde a nenhuma das duas forma de pagamento!'
    }
}

function calcula_desconto(valor_carne, tipo_pagamento) {
    if (tipo_pagamento === 'CARTÃO TABAJARA') {
        return (valor_carne * 0.05)
    } else if (tipo_pagamento === 'DINHEIRO'){
        return 0
    } else {
        return 0
    }
}

function calcula_preco_final(valor_carne, calcula_desconto) {
    return (valor_carne - calcula_desconto)
}

main()