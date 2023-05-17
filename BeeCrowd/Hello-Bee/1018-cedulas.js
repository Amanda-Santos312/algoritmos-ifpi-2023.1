//
import {mostrar_texto, obter_numero_positivo} from '../input-utils.js'

function main() {
    const valor = obter_numero_positivo('Valor: ')

    const notas_100 = qtd_notas_de_100(valor)
    const notas_50 = qtd_notas_de_50(valor)
    const notas_20 = qtd_notas_de_20(valor)
    const notas_10 = qtd_notas_de_10(valor)
    const notas_5 = qtd_notas_de_5(valor)
    const notas_2 = qtd_notas_2(valor)
    const notas_1 = qtd_notas_1(valor)


    mostrar_texto(`\n${valor}`)
    mostrar_texto(`${notas_100} nota(s) de R$ 100,00`)
    mostrar_texto(`${notas_50} nota(s) de R$ 50,00`)
    mostrar_texto(`${notas_20} nota(s) de R$ 20,00`)
    mostrar_texto(`${notas_10} nota(s) de R$ 10,00`)
    mostrar_texto(`${notas_5} nota(s) de R$ 5,00`)
    mostrar_texto(`${notas_2} nota(s) de R$ 2,00`)
    mostrar_texto(`${notas_1} nota(s) de R$ 1,00`)
}


function qtd_notas_de_100(valor) {
    return Math.floor(valor / 100)
}


function qtd_notas_de_50(valor) {
    return Math.floor((valor % 100) / 50)
}


function qtd_notas_de_20(valor) {
    return Math.floor((valor % 50) / 20)
}


function qtd_notas_de_10(valor) {
    return Math.floor((valor % 20) / 10)
}


function qtd_notas_de_5(valor) {
    return Math.floor((valor % 10) / 5)
}


function qtd_notas_2(valor) {
    return Math.floor((valor % 5) / 2)
}


function qtd_notas_1(valor) {
    return Math.floor((valor % 2) / 1)
}
main()