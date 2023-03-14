//Leia 3 números, calcule e escreva a soma dos 2 primeiros e a diferença entre os 2 últimos.
import {input} from '../io_utils.js'

function main() {
    //Entrada
    const numero1 = Number(input('Primeiro número: : '))
    const numero2 = Number(input('Segundo número: : '))
    const numero3 = Number(input('Terceiro número: : '))

    //Processamento
    const soma = numero1 + numero2
    const diferenca = numero2 - numero3

    //Saída
    console.log(`A soma dos dois primeiros números é ${soma} e a diferença dos dois últimos números é ${diferenca}`)
}
main()