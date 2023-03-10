/* Crie um programa que receba o peso e a atividade física diária de uma pessoa e 
calcule a quantidade de água que ela deve beber por dia. 
A quantidade de água recomendada é de 35 ml por quilo de peso para pessoas com atividade física moderada, 
e 45 ml por quilo de peso para pessoas com atividade física intensa. 
O resultado do cálculo deve ser exibido na tela. */

import {question} from 'readline-sync'

function main() {
    //Entrada
    const peso = Number(question('Qual é o seu peso? '))
    const ativ_fisica = question('Atividade física (moderada ou intensa): ')

    //Processamento 
    const qtd_agua_m = calcula_qtd_agua_ativ_moderada(peso)
    const qtd_agua_i = calcula_qtd_agua_ativ_intensa(peso)

    //Saída
    console.log(`\n${qtd_agua_m}\n`) 
    console.log(`${qtd_agua_i}`) 
    
}

function calcula_qtd_agua_ativ_moderada(peso) {
    return 'O recomendado de água é de ' + (peso * 35) + 'ml' + ' para uma atividade física moderada'
}

function calcula_qtd_agua_ativ_intensa(peso) {
    return 'O recomendado de água é de ' + (peso * 45)  + 'ml' + ' para uma atividade física intensa'
}

/*  Com Condicionais(só precisaria de 1 função):

    function calcula_qtd_agua(peso, ativ_fisica) {
    if (ativ_fisica == 'moderada') { 
        return peso * 35 
    }
    else if (ativ_fisica == 'intensa ') { 
        return peso * 45
    }
    else {
        return 0
    }
} 
*/

main()