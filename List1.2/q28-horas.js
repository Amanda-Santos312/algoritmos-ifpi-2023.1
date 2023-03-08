//Leia um número inteiro de horas, calcule e escreva quantas semanas, quantos dias e quantas horas ele corresponde.
import {question} from 'readline-sync'

function main() {
    //Entrada
    const h = Number(question('Horas: '))
    
    //Processamento
    const horas = h % 24
    const dias = Math.floor(h / 24) % 7
    const semanas = Math.floor(h / (24 * 7))

    //Saída
    console.log(`${h} corresponde a ${semanas} semana(s), ${dias} dia(s) e ${horas} hora(s)`)
}
main()