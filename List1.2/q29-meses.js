//Leia um número inteiro de meses, calcule e escreva quantos anos e quantos meses ele corresponde.
import {question} from 'readline-sync'

function main() {
    //Entrada
    const m = Number(question('Meses: '))
    
    //Processamento
    const meses = m % 12  //Só o resto da divisão por 12
    const anos = Math.floor(m / 12)  //Só a parte inteira da divisao por 12

    //Saída
    console.log(`${m} meses corresponde a ${anos} ano(s) e ${meses} mes(es)`)
}
main()


