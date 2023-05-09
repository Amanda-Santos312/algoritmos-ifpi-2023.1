//Calcule os preços de produtos de acordo com a quantidade e o valor. 
import {question} from 'readline-sync'

function main() {
    const codigo_1 = Number(question('\nCodigo da peca 1: '))
    const qtd_peca_1 = Number(question('Quantidade da peca 1: '))
    const valor_1 = Number(question('Valor da peca 1: '))

    const codigo_2 = Number(question('\nCodigo da peca 2: '))
    const qtd_peca_2 = Number(question('Quantidade da peca 2: '))
    const valor_2 = Number(question('Valor da peca 2: '))

    const valor_total = calcula_valor(qtd_peca_1, valor_1, qtd_peca_2, valor_2)

    console.log(`\nVALOR A PAGAR: ${valor_total.toFixed(2)}`)
}

function calcula_valor(qtd_peca_1, valor_1, qtd_peca_2, valor_2) {
    return (qtd_peca_1 * valor_1) + (qtd_peca_2 * valor_2)
}

main()