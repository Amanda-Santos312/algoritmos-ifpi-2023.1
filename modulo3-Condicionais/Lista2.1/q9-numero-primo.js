//Leia 1 (um) número entre 0 e 100, verifique e escreva se o número é ou não primo.
import {question} from 'readline-sync'

function main() {
    const numero = Number(question('Digite um numero: '))

    const eh_primo = verificar_numero(numero)

    console.log(`${eh_primo}`)
}

function verificar_numero(numero) {
    if(numero / numero == 0 && numero / 1){
        return 'É primo!'
    }else{
        return 'Não é primo!'
    }
}

main()