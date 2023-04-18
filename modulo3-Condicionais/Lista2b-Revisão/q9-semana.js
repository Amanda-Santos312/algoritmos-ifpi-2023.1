/* Leia um número e exiba o dia correspondente da semana. (1-Domingo, 2- Segunda etc.), se digitar outro 
valor deve aparecer valor inválido. */
import {question} from 'readline-sync'

function main() {
    const numero = Number(question('Numero para dia: '))

    const dia_da_semana = verifica_numero(numero)

    console.log(`\n${numero} corresponde a ${dia_da_semana}`)
}

function verifica_numero(numero) {
    if(numero === 1) {
        return 'Domingo'
    } else if (numero === 2) {
        return 'Segunda'
    } else if (numero === 3) {
        return 'Terça'
    } else if (numero === 4) {
        return 'Quarta'
    } else if (numero === 5) {
        return 'Quinta'
    } else if (numero === 6) {
        return 'Sexta'
    } else if (numero === 7) {
        return 'Sabado'
    } else {
        return 'Inválido para dia da semana!'
    }
}

main()