//Leia 2 números (A, B) e escreva-os em ordem inversa (B, A).
import {input} from '../io_utils.js'

function main() {
    //Entrada
    const numero1 = Number(input('Primeiro número: '))
    const numero2 = Number(input('Segundo número: '))

    //Processamento e Saída
    console.log(`O inverso é ${numero2} ${numero1}`)
}
main()