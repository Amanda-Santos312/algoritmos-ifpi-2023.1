//Leia o salário de um trabalhador e escreva seu novo salário com um aumento de 25%
import {input} from '../io_utils.js'

function main() {
    //Entrada
    const salário = Number(input('Digite um valor para salario: '))

    //Processamento
    const aumento = calcula_aumento_salarial(salário)

    //Saída
    console.log(`\nO novo salário é de $${aumento}reais`)
}   

function calcula_aumento_salarial(salario) {
    return salario + (salario * 0.25)
}

main() 