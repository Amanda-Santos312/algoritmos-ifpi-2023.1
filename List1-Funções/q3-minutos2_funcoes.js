////Leia um valor em minutos, calcule e escreva o equivalente em horas e minutos.
import {question} from 'readline-sync'

function main() {
    //Entrada
    const minutos = Number(question('Diite um valor para minutos: '))

    //Processamento
    const min = calcula_minutos(minutos)
    const horas = calcula_horas(minutos, min)

    //Saída
    console.log(`${horas}h e ${min}min`)
}

function calcula_minutos(minutos) {
    return (minutos % 60)
}

function calcula_horas(minutos, min) {
    return (minutos - min) / 60
}

main()