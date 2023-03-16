//Leia a idade de uma pessoa expressa em dias e escreva-a expressa em anos, meses e dias.
import {question} from 'readline-sync'

function main () { 
    //Entrada
    const d = Number(question('Dias: '))

    //Processamento
    const dias = d % 30
    const meses = Math.floor(d / 30) % 12
    const anos = Math.floor(d / (30 * 12)) 

    //Saída
    console.log(`${anos} ano(s), ${meses} mes(es) e ${dias} dia(s)`)
}
main()