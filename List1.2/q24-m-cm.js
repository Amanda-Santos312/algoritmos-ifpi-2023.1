//Leia um valor em m, calcule e escreva o equivalente em cm.
import {question} from 'readline-sync'

function main() {
    //Entrada
    const m = Number(question('Valor para metros: '))

    //Processamento
    const cm = m * 100

    //Saída
    console.log(`O valor em centimetros é ${cm}`)
}
main()