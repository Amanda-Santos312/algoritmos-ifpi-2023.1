//Leia 2 números (A, B) e escreva-os em ordem inversa (B, A).
import {input} from '../io_utils.js'

function main() {
    //Entrada
    const numero1 = Number(input('Primeiro número: '))
    const numero2 = Number(input('Segundo número: '))

    //Processamento 
    const num_2 = segundo_num(numero2)
    const num_1 = primeiro_nun(numero1)

    //Saída
    console.log(`\nO inverso de ${numero1}${numero2} é ${num_2}${num_1}`)
}

function segundo_num(numero2) {
    return numero2 
}

function primeiro_nun(numero1) {
    return numero1
}

main()