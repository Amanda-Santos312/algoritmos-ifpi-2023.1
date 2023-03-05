//Leia um valor em kg (quilograma), calcule e escreva o equivalente em g (grama).
import {input} from '../io_utils.js'

function main() {
    //Entrada
    const kg = Number(input('Valor para kilogramas: '))

    //Processamento
    const g = kg * 1000

    //Saída
    console.log(`O valor em gramas é ${g}`)
}
main()