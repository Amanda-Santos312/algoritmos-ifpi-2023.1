//Leia o salário de um trabalhador e escreva seu novo salário com um aumento de 25%
import {question} from 'readline-sync'

function main() {
    //Entrada
    const salário = Number(question('Digite um valor para salario: '))

    //Processamento
    const aumento = calcula_aumento_salarial(salário)

    //Saída
    console.log(`\nO novo salário é de $${aumento}reais`)
}   

function calcula_aumento_salarial(salario) {
    return salario + (salario * 0.25)
}

main() 