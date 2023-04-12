//Leia um número inteiro de minutos, calcule e escreva quantos dias, quantas horas e quantos minutos ele corresponde.
import {question} from 'readline-sync'

function main() {
    //Entrada
    const min = Number(question('Minutos: '))

    //Processamento
    const minutos = calcula_minutos(min)
    const horas = calcula_horas(min)
    const dias = calcula_dias(min)

    //Saída
    console.log(`${min} minutos, corresponde a ${dias} dia(s), ${horas} horas(s) e ${minutos} minuto(s)`)
}

function calcula_minutos(min) {
    return (min % 60)
}

function calcula_horas(min) {
    return Math.floor(min / 60) % 24
}

function calcula_dias(min) {
    return Math.floor(min / (24 * 60))
}

main()