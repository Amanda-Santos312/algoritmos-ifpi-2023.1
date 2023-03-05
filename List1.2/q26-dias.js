//Leia um número inteiro de dias, calcule e escreva quantas semanas e quantos dias ele corresponde.
import {question} from 'readline-sync'

function main() {
    //Entrada
    const d = Number(question('Dias: ')) //Dias iniciais

    //Processamento
    const semanas = Math.floor(d / 7)
    const dias = d % 7

    //Saída
    console.log(`${d} dias é equivalente a ${semanas} semana(s) e ${dias} dia(s)`)
}
main()
/* SEMANAS:
Parte inteira da divisão de d por 7
   DIAS:
Resto da divisão de d por 7
*/