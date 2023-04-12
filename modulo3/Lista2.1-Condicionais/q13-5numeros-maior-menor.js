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

    console.log(`\nMenor: ${menor}`)
    console.log(`Maior: ${maior}`)
}

function verifica_menor(num1, num2, num3, num4, num5) {
    if (num1 < num2 && num1 < num3 && num1 < num4 && num1 < num5) {
        return (`${num1}`)
    } else if (num2 < num1 && num2 < num3 && num2 < num4 && num2 < num5) {
        return (`${num2}`)
    } else if (num3 < num1 && num3 < num2 && num3 < num4 && num3 < num5) {
        return (`${num3}`)
    } else if (num4 < num1 && num4 < num2 && num4 < num3 && num4 < num4) {
        return (`${num4}`)
    } else if (num5 < num1 && num5 < num2 && num5 < num3 && num5 < num4) {
        return (`${num5}`)
    }
}

function verifica_maior(num1, num2, num3, num4, num5) {
    if (num1 > num2 && num1 > num3 && num1 > num4 && num1 > num5) {
        return (`${num1}`)
    } else if (num2 > num1 && num2 > num3 && num2 > num4 && num2 > num5) {
        return (`${num2}`)
    } else if (num3 > num1 && num3 > num2 && num3 > num4 && num3 > num5) {
        return (`${num3}`)
    } else if (num4 > num1 && num4 > num2 && num4 > num3 && num4 > num5) {
        return (`${num4}`)
    } else if (num5 > num1 && num5 > num2 && num5 > num3 && num5 > num4) {
        return (`${num5}`)
    }
}

main()