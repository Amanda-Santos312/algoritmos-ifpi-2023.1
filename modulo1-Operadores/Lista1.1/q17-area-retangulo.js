//Leia o valor da base e altura de um retângulo, calcule e escreva sua área. (área = base * altura)
import {input} from '../io_utils.js'

function main() {
    //Entrada
    const base = Number(input('Valor para a base do retangulo: '))
    const altura = Number(input('Valor para a altura do retangulo: '))

    //Processamento
    const area = base * altura

    //Saída
    console.log(`A área do retangulo é de ${area}cm²`)
}
main()