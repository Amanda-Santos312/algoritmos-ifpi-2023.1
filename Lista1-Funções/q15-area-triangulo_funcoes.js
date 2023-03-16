//Leia o valor da base e altura de um triângulo, calcule e escreva sua área. (área=(base * altura)/2)
import {question} from 'readline-sync'

function main() {
    //Entrada
    const base = Number(question('Valor para a base do triangulo: '))
    const altura = Number(question('Valor para a altura do triangulo: '))

    //Processamento
    const area = calcula_area(base, altura)

    //Saída
    console.log(`\nA área do triângulo é de ${area}cm²`)
}

function calcula_area(base, altura) {
    return (base * altura) / 2
}

main()    