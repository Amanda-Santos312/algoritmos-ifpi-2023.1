/* Para o cálculo de uma folha de pagamento, sabendo que os descontos são do Imposto de Renda, que 
depende do salário bruto (conforme tabela abaixo) e 3% para o Sindicato e que o FGTS corresponde a 
11% do salário bruto, mas não é descontado (é a empresa que deposita). O salário líquido corresponde 
ao salário bruto menos os descontos. O programa deverá pedir ao usuário o valor da sua hora e a 
quantidade de horas trabalhadas no mês.
Desconto do IR:
o Salário Bruto até R$ 900,00 (inclusive) - isento
o Salário Bruto até R$ 1.500,00 (inclusive) - desconto de 5%
o Salário Bruto até R$ 2.500,00 (inclusive) - desconto de 10%
o Salário Bruto acima de R$ 2.500,00 - desconto de 20%
Escreva na tela as informações, dispostas conforme o exemplo abaixo. No exemplo o valor da hora é 5 e 
a quantidade de hora é 220. */
import {question} from 'readline-sync'

function main() {
    const valor = Number(question('Valor de sua hora: '))
    const horas = Number(question('Horas trabalhadas: '))

    const salario_bruto = calcula_salario_bruto(valor, horas)
    const ir = calcula_ir(salario_bruto)
    const inss = calcula_inss(salario_bruto)
    const fgts = calcula_fgts(salario_bruto)
    const descontos = calcula_descontos(ir, inss)
    const salario_liquido = calcula_salario_liquido(salario_bruto, descontos, fgts)

    console.log(`\nSalário Bruto: R$ ${salario_bruto} reais`)
    console.log(`IR : R$ ${ir} reais`)
    console.log(`INSS: R$ ${inss} reais`)
    console.log(`FGTS: R$ ${fgts} reais`)
    console.log(`Total dos Descontos: R$ ${descontos} reais`)
    console.log(`Salário Líquido: R$ ${salario_liquido} reais`)
}

function calcula_salario_bruto(valor, horas) {
    return (valor * horas)
}

function calcula_ir(salario_bruto) {
    if (salario_bruto <= 900) {
        return 'Insento'
    } else if (salario_bruto <= 1500) {
        return salario_bruto * 0.05
    } else if (salario_bruto <= 2500) {
        return salario_bruto * 0.1
    } else {
        return salario_bruto * 0.2
    }
}

function calcula_inss(salario_bruto) {
    return (salario_bruto * 0.10)
}

function calcula_fgts(salario_bruto) {
    return (salario_bruto * 0.11)
}

function calcula_descontos(ir, inss){
    return (ir + inss)
}

function calcula_salario_liquido(salario_bruto, descontos) {
    return (salario_bruto - descontos)
}

main()