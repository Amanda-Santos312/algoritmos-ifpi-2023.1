//Leia um número inteiro (4 dígitos), calcule e escreva a soma dos elementos que o compõem. Ex:número = 9534 ; soma = 9+5+3+4 = 21.
import {question} from 'readline-sync'

function main () {
    //Entrada
    const numero = Number(question('Numero de quatro dígitos: ')) //1234

    //Processamento
    const uni_milhar = Math.floor(numero / 1000) //1.234 -> 1
    const centena = Math.floor(numero / 100) % 10  //2
    const dezena = Math.floor(numero/ 10) % 10//3
    const unidade = numero % 10//4

    const soma = uni_milhar + centena + dezena + unidade

    //Saída
    console.log(`${uni_milhar}`)
    console.log(`${centena}`)
    console.log(`${dezena}`)
    console.log(`${unidade}`)
    console.log(`\nA soma dos número é ${soma}`)
}
main()
