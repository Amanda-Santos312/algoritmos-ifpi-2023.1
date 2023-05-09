//Leia um salário e mostre um novo com aumento, valor do aumento e percentual. 
import {question} from 'readline-sync'

function main() {
    const salario = Number(question('\nSalario: '))

    const aumento = calcula_aumento(salario)

    const novo_salario = salario + aumento

    const percentual = verifica_percentual(salario)

    console.log(`\nNovo salario: ${novo_salario.toFixed(2)}`)
    console.log(`Reajuste ganho: ${aumento.toFixed(2)}`)
    console.log(`Em percentual: ${percentual} %`)
}

function calcula_aumento(salario) {
    if (salario <= 400) {
        return 0.15 * salario
    } else if (salario <= 800) {
        return 0.12 * salario
    } else if (salario <= 1200) {
        return 0.1 * salario
    } else if (salario <= 2000) {
        return 0.07 * salario
    } else {
        return 0.04 * salario
    }
}

function verifica_percentual(salario) {
    if (salario <= 400) {
        return '15'
    } else if (salario <= 800) {
        return '12'
    } else if (salario <= 1200) {
        return '10'
    } else if (salario <= 2000) {
        return '7'
    } else {
        return '4'
    }
}

main()