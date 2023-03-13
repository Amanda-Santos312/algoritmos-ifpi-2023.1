//Leia o salário de um trabalhador e escreva seu novo salário com um aumento de 25%
import {input} from '../io_utils.js'

function main() {
    //Entrada
    const salário = Number(input('Digite um valor para salario: '))

    //Processamento
    const aumento_salarial = salário + (salário * 0.25) 

    //Saída
    console.log(`O novo salario com 25% de aumento é: $${aumento_salarial}reais`)
}
main()