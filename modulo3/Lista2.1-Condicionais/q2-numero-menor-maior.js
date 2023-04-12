//Leia 2 (dois) números, verifique e escreva o menor e o maior entre os números lidos.
import {question} from 'readline-sync'

function main(){
    const num1 = Number(question('Numero1: '))
    const num2 = Number(question('Numero2: '))

    const menor = verifica_menor(num1, num2)
    const maior = verifica_maior(num1, num2)

    console.log(`\nMenor: ${menor}`)
    console.log(`Maior: ${maior}`)
}

function verifica_menor(num1, num2) {
    if (num1 > num2){
        return (`${num2}`)
    } else if (num2 > num1){
        return (`${num1}`)
    } else {
        return ('Nenhum, pois são iguais!')
    }
}

function verifica_maior(num1, num2) {
    if (num1 > num2){
        return (`${num1}`)
    } else if (num2 > num1){
        return (`${num2}`)
    } else {
        return ('Nenhum, pois são iguais!')
    }
}

main()