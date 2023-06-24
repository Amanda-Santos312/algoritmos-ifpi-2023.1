//FALTA TERMINAR
import {mostrar_texto, obter_numero_positivo, obter_texto} from '../input-utils.js'

function main() {
    const valor_iphone = obter_numero_positivo('\nValor do iphone: ')

    mostrar_texto('\n------> FORMAS DE PAGAMENTO: <------')
    mostrar_texto('PIX ou ESPECIE: 15% DE DESCONTO')
    mostrar_texto('DEBITO: 10% DE DESCONTO')
    mostrar_texto('ENTRADA + CREDITO: em até 12x: 3,99% + 1,5% por parcela')

    const forma_pagamento = obter_texto('\nQual voce deseja? ')

    const valor = calcula_valores(forma_pagamento)

    const valor_debito = valor_iphone - (0.10 * valor_iphone)

    const economia = calcula_economias()

    console.log(valor)
    
}


function calcula_valores(forma_pagamento, valor_iphone) {
    if (forma_pagamento === 'PIX' || 'ESPECIE') {
        return valor_iphone - (0.15 * valor_iphone) 
    } else if(forma_pagamento === 'DEBITO') {

    } else if (forma_pagamento === 'ENTRADA + CREDITO') {
        const entrada = obter_numero_positivo('ENTRADA: ')
        const qtd_parcelas = obter_numero_positivo('QUANTAS PARCELAS: ')
        const valor_a_parcelar = (valor_iphone - entrada)
        const valor_final = valor_a_parcelar * 0.0399

        return valor_final
    }
}


main()