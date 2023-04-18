//Leia 2 números, calcule e escreva a divisão da soma pela subtração dos números lidos.
import {input} from '../io_utils.js'

function main() {
    //Entrada
    const numero1 = Number(input('Primeiro número: '))
    const numero2 = Number(input('Segundo número: '))

    //Processamento
    const divisao = (numero1 + numero2)/(numero1 - numero2)

    //Saída
    console.log(`A divisão da soma pela subtração é: ${divisao}`)
}
main()