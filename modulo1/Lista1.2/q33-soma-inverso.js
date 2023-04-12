/* Leia um número inteiro (3 dígitos), calcule e escreva a soma do número com seu inverso.
(Ex.: número = 532 ; inverso = 235 ; soma = 532 + 235 = 767). */
import {question} from 'readline-sync'

function main () {
    //Entrada
    const numero = Number(question('Digite um numero de tres digitos: '))

    //Processamento
    const centena = Math.floor(numero / 100)
    const resto = numero % 100

    const dezena = Math.floor(resto / 10)
    const unidade = resto % 10

    const inverso = (unidade*100) + (dezena * 10) + (centena * 1)

    console.log(`O inverso de ${numero} é ${inverso} `)
    console.log(`A soma entre o número e o seu inverso é de ${numero + inverso}`)
}
main()