//Leia um número inteiro (3 dígitos), calcule e escreva a diferença entre o número e seu inverso.
import {question} from 'readline-sync'

function main () {
    //Entrada
    const numero = Number(question('Digite um número de três dígitos: '))

    //Processamento
    const centena = Math.floor(numero / 100)
    const resto = numero % 100

    const dezena = Math.floor(resto / 10)
    const unidade = resto % 10

    const inverso = (unidade*100) + (dezena * 10) + (centena * 1)

    console.log(`O inverso de ${numero} é ${inverso} `)
    console.log(`A diferença entre eles é de ${numero - inverso}`)
}
main()
