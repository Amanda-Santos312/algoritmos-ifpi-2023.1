//Leia 3 (três) números, verifique e escreva o maior entre os números lidos.
import {question} from 'readline-sync'

function main(){
    const num1 = Number(question('Numero1: '))
    const num2 = Number(question('Numero2: '))
    const num3 = Number(question('Numero3: '))

    const maior = verifica_maior(num1, num2, num3)

    console.log(`O maior é: ${maior}`)
}

function verifica_maior(num1, num2, num3){
    if (num1 > num2 && num1 > num3){
        return (`${num1}`)
    } else if (num2 > num1 && num2 > num3){
        return (`${num2}`)
    } else if (num3 > num1 && num3 > num2){
        return (`${num3}`)
    } else if (num1 == num2 && num1 == num3){
        return 'São todos iguais!'
    }
}

main()