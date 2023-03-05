//Leia o valor do dólar e um valor em dólar, calcule e escreva o equivalente em real (R$).
import {input} from '../io_utils.js'

function main() {
    //Entrada
    const dollar = Number(input('Digite um valor em dollar: '))

    //Processamento
    const real = dollar * 5.19 //Cotação do dia 25 de fevereiro

    //Saída
    console.log(`O valor em real é R$ ${real.toFixed(2)}`)
}
main()