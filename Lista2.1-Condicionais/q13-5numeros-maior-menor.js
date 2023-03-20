/* Leia 5 (cinco) números inteiros e escreva o maior e o menor deles. 
Considere que todos os valores são diferentes. */
import {question} from 'readline-sync'

function main() {
    const num1 = Number(question('Numero1: '))
    const num2 = Number(question('Numero2: '))
    const num3 = Number(question('Numero3: '))
    const num4 = Number(question('Numero4: '))
    const num5 = Number(question('Numero5: '))

    const menor = verifica_menor(num1, num2, num3, num4, num5)
    const maior = verifica_maior(num1, num2, num3, num4, num5)

    console.log(`Menor: ${menor}`)
    console.log(`Maior: ${maior}`)
}

function verifica_menor(num1, num2, num3, num4, num5) {
    if () {
        return 
    }    
}

function verifica_maior(num1, num2, num3, num4, num5) {
    if () {
        return
    }
}

main()