//Leia um número inteiro (3 dígitos), calcule e escreva a soma de seus elementos (C + D + U).
import {input} from '../io_utils.js'

function main() {
    //Entrada
    const numero = Number(input('Número: '))   //542

    //Processamento
    const centena = Math.floor(numero / 100) //5
    const resto = numero % 100              //42

    const dezena = Math.floor(resto / 10)  //4
    const unidade = resto % 10            //2

    const soma = centena + dezena + unidade

    //Saída
    console.log('A soma dos números é: ', soma)

}
main()