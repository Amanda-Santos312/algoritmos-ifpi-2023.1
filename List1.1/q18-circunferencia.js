//Leia o valor do raio de uma circunferência, calcule e escreva seu comprimento.(c = 2 * p * r)
import {input} from '../io_utils.js'

function main() {
    //Entrada
    const pi = 3.14
    const raio = Number(input('Valor para o raio: '))

    //Processamento
    const comprimento = 2 * pi * raio

    //Saída
    console.log(`O comprimento da circunferência é de ${comprimento.toFixed(1)}`)
}
main()