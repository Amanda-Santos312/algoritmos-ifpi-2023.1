//Leia um valor em real (R$), calcule e escreva 70% deste valor.
import {input} from '../io_utils.js'

function main() {
    //Entrada
    const real = Number(input('Digite um valor em real: '))

    //Processamento
    const porcentagem = real * 0.70 

    //Saída
    console.log(`70% do valor é: ${porcentagem} reais`)
}
main()