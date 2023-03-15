/* Escreva um algoritmo que, tendo como dados de entrada 2 pontos quaisquer no plano, ponto1 (x1,y1) e
ponto2 (x2,y2), escreva a distância entre eles, conforme fórmula abaixo. -VER FÓRMULA- */
import {question} from 'readline-sync'

function main() { 
    //Entrada
    const x1 = Number(question('Valor para x1: '))
    const y1 = Number(question('Valor para y1: '))
    const x2 = Number(question('Valor para x2: '))
    const y2 = Number(question('Valor para y2: '))

    //Processamento
    const x = calcula_pontos_x (x1, x2)
    const y = calcula_pontos_y (y1, y2)
    const distancia = calcula_distancia(x, y)

    //Saída
    console.log(`A distância entre os pontos é de ${distancia.toFixed(2)}`)
}

function calcula_pontos_x(x1, x2) {
    return (x2 - x1) * (x2 - x1)
}

function calcula_pontos_y(y1, y2) {
    return (y2 - y1) * (y2 - y1)
}

function calcula_distancia(x , y) {
    return Math.sqrt(x + y)
}

main()