//Leia um valor em km, calcule e escreva o equivalente em m.
import {input} from '../io_utils.js'

function main() {
    //Entrada
    const km = Number(input('Valor para kilometros: '))

    //Processamento
    const m = km * 1000

    //Saída
    console.log(`O valor em metros é ${m}`)
}
main()