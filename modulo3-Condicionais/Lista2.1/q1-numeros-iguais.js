//Leia 3 (três) números, verifique e escreva quantos números iguais existem entre os números.
import {question} from 'readline-sync'

function main() {
    const num1 = Number(question('Numero1: '))
    const num2 = Number(question('Numero2: '))
    const num3 = Number(question('Numero3: '))

    const numeros_iguais = verifica_numeros_iguais(num1, num2, num3)

    console.log(`Temos ${numeros_iguais} números iguais`)
}

function verifica_numeros_iguais(num1, num2, num3) {
    if(num1 == num2 && num3 == num1 && num2 == num3){
        return '3'
    }else if(num1 == num2 || num2 == num3 || num3 == num1){
        return '2'
    }else{
        return '0'
    }
}

main()