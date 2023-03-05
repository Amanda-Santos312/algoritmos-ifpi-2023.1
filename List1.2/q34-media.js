//Leia 3 números, calcule e escreva a média dos números
import {input} from '../io_utils.js'

function main() {
    //Entrada
    const n1 = Number(input('Número1: '))
    const n2 = Number(input('Número2: '))
    const n3 = Number(input('Número3: '))

    //Processamento
    const media = (n1 + n2 + n3) / 3

    //Saída
    console.log(`A média desses números é ${media}`)
}
main()