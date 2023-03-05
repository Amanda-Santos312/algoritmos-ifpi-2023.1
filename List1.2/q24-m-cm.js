//Leia um valor em m, calcule e escreva o equivalente em cm.
import {input} from '../io_utils.js'

function main() {
    //Entrada
    const m = Number(input('Valor para metros: '))

    //Processamento
    const cm = m * 100

    //Saída
    console.log(`O valor em centimetros é ${cm}`)
}
main()