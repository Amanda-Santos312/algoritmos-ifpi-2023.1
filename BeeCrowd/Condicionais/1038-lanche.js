//Leia o código de um lanche e a quantidade comprado e calcule o valor a pagar.
import {question} from 'readline-sync'

function main() {
    const codigo = Number(question('\nCodigo de 1 a 5: '))
    const qtd = Number(question('Quantidade: '))

    const preco = calcula_valor_lanche(codigo, qtd)

    console.log(`Total: R$ ${preco.toFixed(2)}`)
}

function calcula_valor_lanche(codigo, qtd) {
    if (codigo === 1) {
        return qtd * 4.0
    } else if (codigo === 2) {
        return qtd * 4.5
    } else if (codigo === 3) {
        return qtd * 5.0
    } else if (codigo === 4) {
        return qtd * 2.0
    } else if (codigo === 5) {
        return qtd * 1.5
    } else {
        return 'Codigo invalido'
    }
}

main()