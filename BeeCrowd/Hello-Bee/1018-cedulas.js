//Leia um valor e mostre sua formação por cédulas.
import {mostrar_texto, obter_numero_positivo} from '../input-utils.js'

function main() {
    const valor = obter_numero_positivo('Valor: ')

    const notas_100 = Math.floor(valor / 100) //5
    const resto1 = valor % 100 //76
    
    const notas_50 = Math.floor(resto1 / 50) //1
    const resto2 = resto1 % 50 //26
    
    const notas_20 = Math.floor(resto2 / 20) //1
    const resto3 = resto2 % 20 //6 

    const notas_10 = Math.floor(resto3 / 10) //0
    const resto4 = resto3 % 10 //6

    const notas_5 = Math.floor(resto4 / 5) // 1
    const resto5 = resto4 % 5 //1

    const notas_2 = Math.floor(resto5 / 2) //0
    const resto6 = resto5 % 2 //1

    const notas_1 = Math.floor(resto6 / 1) //1
    
    
    mostrar_texto(`\n${valor}`)
    mostrar_texto(`${notas_100} nota(s) de R$ 100,00`)
    mostrar_texto(`${notas_50} nota(s) de R$ 50,00`)
    mostrar_texto(`${notas_20} nota(s) de R$ 20,00`)
    mostrar_texto(`${notas_10} nota(s) de R$ 10,00`)
    mostrar_texto(`${notas_5} nota(s) de R$ 5,00`)
    mostrar_texto(`${notas_2} nota(s) de R$ 2,00`)
    mostrar_texto(`${notas_1} nota(s) de R$ 1,00`)
}
main()