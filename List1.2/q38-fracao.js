//Leia 2 (duas) frações (numerador e denominador), calcule e escreva a soma destas frações, escrevendo o resultado em forma de fração.
import {question} from 'readline-sync'

function main () {
    //Entrada
    const num1 = Number(question('Numerador1: '))
    const den1 = Number(question('Denominador1: '))
    const num2 = Number(question('Numerador2: '))
    const den2 = Number(question('Denominador2: '))

    //Processamento
    const denominador = den1 * den2
    const numerador = ((denominador / den1)*num1) + ((denominador / den2)*num2)
    
    //Saída
    console.log('Fração:', numerador+'/'+denominador)
}
main()
