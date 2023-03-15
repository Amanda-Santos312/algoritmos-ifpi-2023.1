//Leia a idade de uma pessoa expressa em anos, meses e dias e escreva-a expressa apenas em dias.
import {question} from 'readline-sync'

function main() {
    //Entrada
    const anos = Number(question('Anos: '))
    const meses = Number(question('Meses: '))
    const dias = Number(question('Dias: '))

    //Processamento
    const dias_totais = transforma_em_dias(anos, meses, dias)

    //Saída
    console.log(`${anos}ano ${meses}mes(es) e ${dias}dia(s) equivalem a ${dias_totais} dias `)
    
}

function transforma_em_dias(anos, meses, dias) {
    return (anos * 365) + (meses * 30) + dias
}

main()