/* As Organizações Tabajara resolveram dar um aumento de salário aos seus colaboradores e lhe 
contrataram para desenvolver o programa que calculará os reajustes. Escreva um algoritmo que leia o 
salário de um colaborador e o reajuste segundo o seguinte critério, baseado no salário atual:
o salários até R$ 280,00 (incluindo) : aumento de 20%
o salários entre R$ 280,00 e R$ 700,00 : aumento de 15%
o salários entre R$ 700,00 e R$ 1500,00 : aumento de 10%
o salários de R$ 1500,00 em diante : aumento de 5% Após o aumento ser realizado, informe na tela:
· o salário antes do reajuste;
· o percentual de aumento aplicado;
· o valor do aumento;
· o novo salário, após o aumento. */
import {question} from 'readline-sync'

function main() {
    const salario_inicial = Number(question('Qual o seu salario? '))

    const aumento_salarial = calcula_aumento(salario_inicial)
    const percentual = verifica_aumento_percentual(salario_inicial, aumento_salarial)
    const valor_aumento = verifica_aumento(salario_inicial, aumento_salarial)

    console.log(`\nSalario antes do reajuste: R$ ${salario_inicial} reais`)
    console.log(`Percentual de aumento: ${percentual}%`)
    console.log(`Valor do aumento: R$ ${valor_aumento} reais`)
    console.log(`Salario depois do reajuste: R$ ${aumento_salarial} reais`)
}

function calcula_aumento(salario_inicial) {
    if (salario_inicial <= 280) {
        return (salario_inicial + (salario_inicial * 0.2))
    } else if (salario_inicial <= 700) {
        return (salario_inicial + (salario_inicial * 0.15))
    } else if (salario_inicial <= 1500) {
        return (salario_inicial + (salario_inicial * 0.1))
    } else {
        return (salario_inicial + (salario_inicial * 0.05))
    }
}

function verifica_aumento_percentual(salario_inicial) {
    if (salario_inicial <= 280) {
        return '20'
    } else if (salario_inicial <= 700) {
        return '15'
    } else if (salario_inicial <= 1500) {
        return '10'
    } else {
        return '5'
    }
}

function verifica_aumento(salario_inicial, aumento_salarial) {
    return (aumento_salarial - salario_inicial)
}

main()