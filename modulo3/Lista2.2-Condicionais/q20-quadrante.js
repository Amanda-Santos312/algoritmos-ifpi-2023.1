/* Leia a medida de um ângulo (entre 0 e 360°) e 
escreva o quadrante (primeiro, segundo, terceiro ou quarto) em que o ângulo se localiza. */
import {question} from 'readline-sync'

function main() {
    const angulo = Number(question('Valor para angulo: '))

    const quadrante = verifica_quadrante(angulo)

    console.log(`Esse angulo faz parte do ${quadrante} quadrante!`)
}

function verifica_quadrante(angulo) {
    if (angulo <= 90) {
        return '1°'
    } else if (angulo <= 180) {
        return '2°'
    } else if (angulo <= 270) {
        return '3°'
    } else {
        return '4°'
    }
}

main()