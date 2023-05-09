//Calcule o salario de um funcionario de acordo com as horas trabalhadas e o valor da sua hora.
import {question} from 'readline-sync'

function main() {
    const numero_funcionario = Number(question('\nNumero do funcionario: '))
    const horas_trabalhadas = Number(question('Horas trabalhadas: '))
    const valor_hora = Number(question('Valor por hora trabalhada: '))

    const salario = calcula_salario(horas_trabalhadas, valor_hora)

    console.log(`\nNumber = ${numero_funcionario}`)
    console.log(`Salary = ${salario.toFixed(2)}`)
}

function calcula_salario(horas_trabalhadas, valor_hora) {
    return  valor_hora * horas_trabalhadas
}

main()