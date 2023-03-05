//Leia 2 números inteiros, calcule e escreva o quociente e o resto da divisão do 1º pelo 2º.
import {input} from '../io_utils.js'

function main() {
    //Entrada
    const numero1 = Number(input('Primeiro número: '))
    const numero2 = Number(input('Segundo número: '))

    //Processamento
    const quociente = numero1 / numero2
    const resto = numero1 % numero2

    //Saída
    console.log(`Quociente:${quociente.toPrecision(1)} Resto:${resto}`)
}
main()