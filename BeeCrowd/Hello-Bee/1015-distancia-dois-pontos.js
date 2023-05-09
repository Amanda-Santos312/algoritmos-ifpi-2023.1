//Calcule a distância entre dois pontos p1(x1, y1) e p2(x2, y2).
import {question} from 'readline-sync'

function main() {
    const x1 = Number(question('X1: '))
    const y1 = Number(question('Y1: '))
    const x2 = Number(question('X2: '))
    const y2 = Number(question('Y2: '))

    const distancia_pontos = calcula_distancia_dois_pontos(x1, y1, x2, y2) 

    console.log(`${distancia_pontos.toFixed(4)}`)
}

function calcula_distancia_dois_pontos(x1, y1, x2, y2) {
    return Math.sqrt(((x2 - x1)**2) + ((y2 - y1)**2))
}

main()