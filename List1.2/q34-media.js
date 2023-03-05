//Leia 3 números, calcule e escreva a média dos números
import {question} from 'readline-sync'

function main() {
    //Entrada
    const n1 = Number(question('Número1: '))
    const n2 = Number(question('Número2: '))
    const n3 = Number(question('Número3: '))

    //Processamento
    const media = (n1 + n2 + n3) / 3

    //Saída
    console.log(`A média desses números é ${media}`)
}
main()