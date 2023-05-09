//Leia um salário e verifique de acordo com as faixas a porcentangem para o imposto de renda.
import {question} from 'readline-sync'

function main() {
    const salario = Number(question('\nSalario: '))

    const imposto = calcula_valor_imposto(salario)

    console.log(`${imposto}`)
}

function calcula_valor_imposto(salario) {
    if (salario <= 2000) {
        return 'Isento'
    } else if (salario <= 3000) {
        return 0.08 * 1000
    } else if (salario <= 4500) {
        return 0.08 * 1000 + 0.18 * (salario - 1000) 
    } else if (salario >= 4500) {
        return 0.28 * salario
    }
}
main()