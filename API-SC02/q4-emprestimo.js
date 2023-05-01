import {mostrar_texto, obter_numero_positivo} from './input-utils.js'

function main() {
    const renda_mensal = obter_numero_positivo('Sua renda mensal: ')
    const valor_emprestimo = obter_numero_positivo('Valor do emprestimo: ')
    const prazo = obter_numero_positivo('Prazo: ')

    //const valor_maximo = 0.4 * renda_mensal

    const selic = 0.1375
    const iof = calcula_iof(valor_emprestimo, prazo)
    const juros = calcula_juros(renda_mensal,prazo)

    

    mostrar_texto(valor_emprestimo)
    mostrar_texto(iof.toFixed(2))
    mostrar_texto(juros)

}

function calcula_iof(valor_emprestimo, prazo) {
    const dias = prazo * 30
    return (0.38/100) * valor_emprestimo + (0.0082/100) * dias
}


function calcula_juros(valor_emprestimo, iof) {
    return valor_emprestimo + iof
}

main() 