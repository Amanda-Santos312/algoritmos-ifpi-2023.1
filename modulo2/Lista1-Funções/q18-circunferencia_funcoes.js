//Leia o valor do raio de uma circunferência, calcule e escreva seu comprimento.(c = 2 * p * r)
import {question} from 'readline-sync'

function main() {
    //Entrada
    const pi = 3.14
    const raio = Number(question('Valor para o raio: '))

    //Processamento
    const comprimento = calcula_comprimento_circunferencia(pi, raio)
    
    //Saída
    console.log(`\nO comprimento da circunferência é de ${comprimento.toFixed(1)}`)
}

function calcula_comprimento_circunferencia(pi, raio) {
    return (2 * pi * raio)
}

main()