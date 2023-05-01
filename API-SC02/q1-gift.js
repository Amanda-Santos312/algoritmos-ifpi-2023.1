//Domingo(30/04) aprox 1h30

import {mostrar_texto, obter_numero_positivo, obter_texto} from './input-utils.js'

function main() {
    mostrar_texto(`------> LOJA COMPRE MAIS <----- `)
    const n_compras = obter_numero_positivo('\nQuantas compras? ')
    const nome = obter_texto('\nNome do cliente: ')

    let valor_compras = 0
    let contador = 0
    let soma_vendas = 0


    while (contador < n_compras) {
        valor_compras = obter_numero_positivo('\nValor da compra: ')

        soma_vendas = soma_vendas + valor_compras

        contador++
    }

    const cashback = verifica_cashback(soma_vendas)
    const percentual = verifica_porcentagem(soma_vendas, cashback)
    const valor_total_loja = soma_vendas - cashback

    mostrar_texto(`\n------> NOTA FISCAL <-----
    \nNome: ${nome}
    \nSoma das vendas: ${soma_vendas}
    \nValor do cashback: ${cashback.toFixed(2)}
    \nPercentual do casback: ${percentual}%
    \nValor final: ${valor_total_loja.toFixed(2)}
    `)
}


function verifica_cashback(soma_vendas) {
    if (soma_vendas <= 250 ) {
        return 0.05 * soma_vendas
    } else if (soma_vendas <= 500) {
        return 0.07 * soma_vendas
    } else if (soma_vendas <= 750) {
        return 0.08 * soma_vendas
    } else {
        return (0.05 * soma_vendas) + (0.07 * soma_vendas) + (0.08 * soma_vendas) + (0.25 * soma_vendas)
    }
}


function verifica_porcentagem(soma_vendas, cashback) {
    const x = (cashback * 100 )/ soma_vendas
    return x
    
}

main()