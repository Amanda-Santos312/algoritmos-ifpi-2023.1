//Leia 2 (dois) números, calcule e escreva o mdc (máximo divisor comum) entre os números lidos.
import {question} from 'readline-sync'

function main() {
    const num1 = Number(question('Numero1: '))
    const num2 = Number(question('Numero2: '))

    const mdc = calcula_mdc(num1, num2)

    console.log(`O mdc de ${num1} e ${num2} é ${mdc}`)
}

function calcula_mdc(num1, num2) {
    let candidato = num1

    while(candidato >= 1) {
        if (eh_divisor(candidato, num1) && (candidato, num2)) {
            return candidato
        }
        candidato = candidato - 1
    }
}

function eh_divisor(candidato, numero) {
    return numero % candidato === 0
}

main()