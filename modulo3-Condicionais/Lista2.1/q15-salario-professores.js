/* Leia a quantidade de horas aula dadas por dois professores e o valor por hora recebido por cada um. 
Escreva na tela qual dos professores tem salário total maior.*/
import {question} from 'readline-sync'

function main() {
    const horas1 = Number(question('Horas trabalhadas1: '))
    const horas2 = Number(question('Horas trabalhadas2: '))
    
    const valor_hora1 = Number(question('\nValor da hora1: '))
    const valor_hora2 = Number(question('Valor da hora2: '))

    const salario1 = calcula_salario_prof1(horas1, valor_hora1)
    const salario2 = calcula_salario_prof2(horas2, valor_hora2)

    console.log(`\nSalario1: ${salario1} reais`)
    console.log(`Salario2: ${salario2} reais`)

    const salario_maior = verifica_maior_salario(salario1, salario2)
    
    console.log(`\nO maior salario é o ${salario_maior} !`)
}

function calcula_salario_prof1(horas1, valor_hora1) {
    return horas1 * valor_hora1
}

function calcula_salario_prof2(horas2, valor_hora2) {
    return horas2 * valor_hora2
}

function verifica_maior_salario(salario1, salario2){
    if (salario1 > salario2) {
        return 'Salario1'
    } else {
        return 'Salario2'
    }
}

main()

