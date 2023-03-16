//Leia um número inteiro de segundos, calcule e escreva quantas horas, quantos minutos e quantos segundos ele corresponde.
import {question} from 'readline-sync'

function main() {
    //Entrada
    const s = Number(question('Segundos: '))

    //Processamento
    const horas = Math.floor(s / 3600)
    const minutos = Math.floor(s / 60) % 60
    const segundos = s % 60
    
    //Saída
    console.log(`${horas}h:${minutos}min:${segundos}s`)
}
main() 