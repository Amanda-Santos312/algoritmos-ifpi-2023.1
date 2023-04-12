/* Uma fruteira está vendendo frutas com a seguinte tabela de preços:
           Até 5 Kg                    Acima de 5 Kg
Morango    R$ 2,50 por Kg              R$ 2,20 por Kg
Maçã       R$ 1,80 por Kg              R$ 1,50 por Kg

Se o cliente comprar mais de 8 Kg em frutas ou o valor total da compra ultrapassar R$ 25,00, receberá 
ainda um desconto de 10% sobre este total. Escreva um algoritmo para ler a quantidade (em Kg) de 
morangos e a quantidade (em Kg) de maças adquiridas e escreva o valor a ser pago pelo cliente. */
import {question} from 'readline-sync'

function main() {
    console.log(`------> FRUTARIA PREÇO BOM <-------`)

    const kg_maca = Number(question('\nQuantos kg de maca? '))
    const kg_morango = Number(question('Quantos kg de morango? '))

    const valor_maca = calcula_preco_maca(kg_maca)
    const valor_morango = calcula_preco_morango(kg_morango)
    const valor_total = valor_maca + valor_morango
    const desconto = calcula_desconto(kg_maca, kg_morango, valor_total)
    const valor_desconto = valor_total - desconto

    console.log(`\nPreço da maçã:     R$ ${valor_maca.toFixed(1)}`)
    console.log(`Preço do morango:  R$ ${valor_morango.toFixed(1)}`)
    console.log(`Total:             R$ ${valor_total}`)
    console.log(`\nDesconto: ${desconto}`)
    console.log(`Valor total: R$ ${valor_desconto} reais`)
}

function calcula_preco_maca(kg_maca) {
    if (kg_maca <= 5) {
        return (1.8 * kg_maca)
    } else {
        return (1.5 * kg_maca)
    }
}

function calcula_preco_morango(kg_morango) {
    if (kg_morango <= 5) {
        return (2.5 * kg_morango)
    } else {
        return (2.2 * kg_morango)
    }
}

function calcula_desconto(kg_maca, kg_morango, valor_total) {
    if (kg_maca + kg_morango > 8) {
        return (0.1 * valor_total)
    } else if (valor_total > 25) {
        return (0.1 * valor_total)
    } else {
        return 0
    }
}

main()