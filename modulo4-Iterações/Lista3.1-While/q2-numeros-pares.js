//Leia N e escreva todos os números inteiros pares de 1 a N.
import {question} from 'readline-sync'

function main() {
    const n = Number(question('Valor para N: '))

    let contador = 1
    
    while (contador < n) {
        if (contador % 2 === 0) {
            console.log(contador)
        }
        contador++
    }
}
main()