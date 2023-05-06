//Calcule a área de um circulo
import {question} from 'readline-sync'

function main() {
    const pi = 3.14159
    const raio = Number(question('Valor de raio: '))

    const area = calcula_area(pi, raio)

    console.log(`A = ${area.toFixed(4)}`) //.toFixed(4)
}

function calcula_area(pi, raio) {
    return pi * (raio * raio)
}

main()