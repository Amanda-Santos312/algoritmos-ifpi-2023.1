//Leia dois valores para descobrir em qual quadrante eles pertencem.
import {question} from 'readline-sync'

function main() {
    const num1 = Number(question('\nNum1: '))
    const num2 = Number(question('Num2: '))

    const quadrante = verifica_numeros(num1, num2)

    console.log(`\n> ${quadrante}`)
}

function verifica_numeros(num1, num2){
    if (num1 === 0 && num2 === 0) {
        return 'Origem'
    } else if (num2 === 0) {
        return 'Eixo X'
    } else if (num1 === 0) {
        return 'Eixo Y'
    } else if (num1 > 0 && num2 > 0) {
        return 'Q1'
    } else if (num1 < 0 && num2 > 0) {
        return 'Q2'
    } else if (num1 < 0 && num2 < 0) {
        return 'Q3'
    } else { //num1 > 0 && num2 < 0
        return 'Q4'
    }    
}

main()