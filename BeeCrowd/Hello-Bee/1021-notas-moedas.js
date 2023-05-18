//Leia um valor e mostre a sua formação de cédulas e moedas
import { mostrar_texto, obter_numero_positivo } from '../input-utils.js'

function main() {
    const valor = obter_numero_positivo('Valor: ')

    //NOTAS:
    const notas_100 = Math.floor(valor / 100) 
    const resto1 = valor % 100 
    
    const notas_50 = Math.floor(resto1 / 50) 
    const resto2 = resto1 % 50 
    
    const notas_20 = Math.floor(resto2 / 20) 
    const resto3 = resto2 % 20 

    const notas_10 = Math.floor(resto3 / 10)
    const resto4 = resto3 % 10

    const notas_5 = Math.floor(resto4 / 5) 
    const resto5 = resto4 % 5 

    const notas_2 = Math.floor(resto5 / 2) 
    const resto6 = resto5 % 2 

    //MOEDAS:
    const moedas_1 = Math.floor(resto6 / 1) 
    const resto7 = resto6 % 1

    const moedas_50 = Math.floor(resto7 / 0.50)
    const resto8 = resto7 % 0.5

    const moedas_25 = Math.floor(resto8 / 0.25)
    const resto9 = resto8 % 0.25

    const moedas_10 = Math.floor(resto9 / 0.10)
    const resto10 = resto9 % 0.10

    const moedas_05 = Math.floor(resto10 / 0.05)
    const resto11 = resto10 % 0.05

    const moedas_01 = Math.floor(resto11 / 0.01)


    mostrar_texto(`\n${valor}`)
    mostrar_texto(`${notas_100} nota(s) de R$ 100.00`)
    mostrar_texto(`${notas_50} nota(s) de R$ 50.00`)
    mostrar_texto(`${notas_20} nota(s) de R$ 20.00`)
    mostrar_texto(`${notas_10} nota(s) de R$ 10.00`)
    mostrar_texto(`${notas_5} nota(s) de R$ 5.00`)
    mostrar_texto(`${notas_2} nota(s) de R$ 2.00`)

    mostrar_texto(`\n${moedas_1} moeda(s) de R$ 1.00`)
    mostrar_texto(`${moedas_50} moeda(s) de R$ 0.50`)
    mostrar_texto(`${moedas_25} moeda(s) de R$ 0.25`)
    mostrar_texto(`${moedas_10} moeda(s) de R$ 0.10`)
    mostrar_texto(`${moedas_05} moeda(s) de R$ 0.05`)
    mostrar_texto(`${moedas_01} moeda(s) de R$ 0.01`)
}
main()