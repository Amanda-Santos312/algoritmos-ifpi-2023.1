//Leia N e escreva todos os números inteiros de 1 a N.
import {question} from 'readline-sync'

function main() {
    const n = Number(question('Valor para N: '))

    let contador = 1

    while (contador <= n) {
        console.log(contador)
        contador ++
    }
}
main()