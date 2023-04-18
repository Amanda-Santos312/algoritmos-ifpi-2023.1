//Leia 3 (três) números e escreva-os em ordem crescente.
import {question} from 'readline-sync'

function main() {
    const num1 = Number(question('Numero1: '))
    const num2 = Number(question('Numero2: '))
    const num3 = Number(question('Numero3: '))

    const crescente = forma_crescente(num1, num2, num3)

    console.log(`A forma crescente é: ${crescente}`)
}

function forma_crescente(num1, num2, num3) {
    if (num1 > num2 && num2 > num3){
        return (`${num1}, ${num2}, ${num3}`)
    } else if (num1 > num3 && num3 > num2){
        return (`${num1}, ${num3}, ${num2}`)
    } else if (num2 > num1 && num1 > num3){
        return (`${num2}, ${num1}, ${num3}`)
    } else if (num2 > num3 && num3 > num1){
        return (`${num2}, ${num3}, ${num1}`)
    } else if (num3 > num1 && num1 > num2){
        return (`${num3}, ${num1}, ${num2}`)
    } else if (num3 > num2 && num2 > num1){
        return (`${num3}, ${num2}, ${num1}`) 
    } else {  //Para numeros iguais:(num1 == num2 && num2 == num3)
        return (`${num1}, ${num2}, ${num3}`)
    }
}

main()