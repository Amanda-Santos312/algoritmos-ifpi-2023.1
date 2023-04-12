//Leia um número inteiro de segundos, calcule e escreva quantas horas, quantos minutos e quantos segundos ele corresponde.
import {question} from 'readline-sync'

function main() {
    //Entrada
    const s = Number(question('Segundos: '))

    //Processamento
    const horas = calcula_horas(s)
    const minutos = calcula_minutos(s)
    const segundos = calcula_segundos(s)

    //Saída
    console.log(`${horas}h:${minutos}min:${segundos}s`)
}

function calcula_horas(s) {
    return Math.floor(s / 3600)
}

function calcula_minutos(s) {
    return Math.floor(s / 60) % 60
}

function calcula_segundos(s) {
    return s % 60
}

main()