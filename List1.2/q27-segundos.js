//Leia um número inteiro de segundos, calcule e escreva quantas horas, quantos minutos e quantos segundos ele corresponde.
import {question} from 'readline-sync'

function main() {
    //Entrada
    const s = Number(question('Segundos: '))

    //Processamento
    const horas  = Math.floor(s / 3600)
    const minutos = s % 3600
    const segundos = minutos % 3600

    //Saída
    console.log(`${horas}:${minutos}:${segundos}`)
}
main()