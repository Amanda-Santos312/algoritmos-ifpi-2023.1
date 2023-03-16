//Leia um número inteiro (4 dígitos binários), calcule e escreva o equivalente na base decimal.
import {question} from 'readline-sync'

function main() {
    //Entrada 
    const dig_1 = Number(question('1° dígito(1 ou 0):  '))
    const dig_2 = Number(question('1° dígito(1 ou 0):  '))
    const dig_3 = Number(question('1° dígito(1 ou 0):  '))
    const dig_4 = Number(question('1° dígito(1 ou 0):  '))
    
    //Processamento
    const valor_1 = dig_1 * 8
    const valor_2 = dig_2 * 4
    const valor_3 = dig_3 * 2
    const valor_4 = dig_4 * 1

    const soma = (valor_1 + valor_2 + valor_3 + valor_4)

    //Saída
    console.log(`O numero em binario ${dig_1}${dig_2}${dig_3}${dig_4} corresponde a ${soma} em decimal.`)
}
main()