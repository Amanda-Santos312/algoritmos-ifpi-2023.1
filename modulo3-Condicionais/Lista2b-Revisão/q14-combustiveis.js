/* Um posto está vendendo combustíveis com a seguinte tabela de descontos:
1. Álcool:
· até 20 litros, desconto de 3% por litro
· acima de 20 litros, desconto de 5% por litro
2. Gasolina:
· até 20 litros, desconto de 4% por litro
· acima de 20 litros, desconto de 6% por litro.
Escreva um algoritmo que leia o número de litros vendidos, o tipo de combustível (codificado da 
seguinte forma: A-álcool, G-gasolina), calcule e imprima o valor a ser pago pelo cliente sabendo-se que 
o preço do litro da gasolina é R$ 2,50 o preço do litro do álcool é R$ 1,90. */
import {question} from 'readline-sync'

function main() {
    console.log(`\n---------> BEM VINDO AO POSTO MANDA ENCHER! <----------`)
    
    const combustivel = question('\nAlcool-A ou Gasolina-G: ')
    const litros = Number(question('Quantos litros? '))

    const tipo_combustivel = verifica_combustivel(combustivel)
    const valor_a_pagar = calcula_preco(combustivel, litros)
    const desconto = verifica_desconto(litros)
    
    console.log(`${tipo_combustivel}`)
    console.log(`Valor a pagar: R$ ${valor_a_pagar}`)
    console.log(`${desconto}`)
}

function verifica_combustivel(combustivel) {
    if (combustivel === 'A') {
        return 'ALCOOL'
    } else {
        return 'GASOLINA'
    }
}

function calcula_preco(tipo_combustivel, litros) {
    if (tipo_combustivel === 'ALCOOL') {
        return (1.9 * litros)
    } else {
        return (2.5 * litros)
        }
    }


function verifica_desconto(litros, tipo_combustivel, preco_a_pagar) {
    if (tipo_combustivel === 'ALCOOL') {
        if(litros <= 20) {
            return preco_a_pagar * 0.03 
        } else {
            return preco_a_pagar * 0.05 
        }
    } else {
        if(litros <= 20) {
            return (0.04 * litros)
        } else {
            return (0.06 * litros)
        }
    }
   
}

main()