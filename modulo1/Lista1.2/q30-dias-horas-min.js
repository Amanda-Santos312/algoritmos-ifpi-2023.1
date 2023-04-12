//Leia um número inteiro de minutos, calcule e escreva quantos dias, quantas horas e quantos minutos ele corresponde.
import {question} from 'readline-sync'

function main () { 
    //Entrada
    const min = Number(question(`Minutos: `))

    //Processamento
    const minutos = min % 60 //Só o resto da divisao por 60
    const horas = Math.floor(min / 60) % 24 
    const dias = Math.floor(min / (24 * 60)) 

    //Saída
    console.log(`${min} minutos, corresponde a ${dias} dia(s), ${horas} hora(s) e ${minutos} minuto(s)`)
}
main()


