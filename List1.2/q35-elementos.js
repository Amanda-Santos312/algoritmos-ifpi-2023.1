//Leia um número inteiro (4 dígitos), calcule e escreva a soma dos elementos que o compõem. Ex:número = 9534 ; soma = 9+5+3+4 = 21.
import {question} from 'readline-sync'

function main () {
    //Entrada
    const numero = Number(question('Digite um número de quatro dígitos: '))

    //Processamento
    const uni_milhar = Math.floor(numero / 1000)
    const resto = numero % 1000

}
main()
