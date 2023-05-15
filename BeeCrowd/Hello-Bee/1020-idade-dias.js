//Leia um valor para idade e mostre quantos anos, meses e dias ele corresponde.
import {mostrar_texto, obter_numero_positivo} from '../../modulo4-Iterações/input-utils.js'

function main() {
    const idade_dias = obter_numero_positivo('Idade: ')

    const anos = calcula_anos(idade_dias)
    const meses = calcula_meses(idade_dias)
    const dias = calcula_dias(idade_dias)

    mostrar_texto(`${anos} ano(s)`)
    mostrar_texto(`${meses} mes(es)`)
    mostrar_texto(`${dias} dia(s)`)
}

function calcula_anos(idade) {
    return Math.floor(idade / 365)
}

function calcula_meses(idade) {
    return Math.floor((idade % 365) / 30)
}

function calcula_dias(idade) {
    return Math.floor((idade % 365) % 30)
}

main()