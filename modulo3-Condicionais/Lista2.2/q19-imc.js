/* Leia a altura (em metros) e peso (em Kg) de uma pessoa, 
em seguida calcule o índice de massa corpórea (IMC = peso / altura2). 
Ao final, escreva se a pessoa está com peso normal (IMC abaixo de 25), 
obeso (IMC entre 25 e 30) ou 
obesidade mórbida (IMC acima de 30). */
import {question} from 'readline-sync'

function main() {
    const altura = Number(question('Altura(m): '))
    const peso = Number(question('Peso(kg): '))

    const imc = calcula_imc(altura, peso)
    const situacao = verifica_imc(imc)

    console.log(`\nSeu imc é de ${imc.toFixed(1)}`)
    console.log(`\nSua situação é ${situacao}`)
}

function calcula_imc(altura, peso) {
    return peso / (altura**2)
}

function verifica_imc(imc) {
    if (imc <= 18) {
        return 'Abaixo do peso'
    } else if (imc <= 25) {
        return 'Normal'
    } else if (imc <= 30) {
        return 'Sobrepeso'
    } else {
        return 'Obeso'
    }
}

main()