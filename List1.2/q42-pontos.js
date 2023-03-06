/* Escreva um algoritmo que, tendo como dados de entrada 2 pontos quaisquer no plano, ponto1 (x1,y1) e
ponto2 (x2,y2), escreva a distância entre eles, conforme fórmula abaixo. -VER FÓRMULA- */
import {question} from 'readline-sync'

function main () { 
    //Entrada
    const x1 = Number(question('Valor para x1: '))
    const y1 = Number(question('Valor para y1: '))
    const x2 = Number(question('Valor para x2: '))
    const y2 = Number(question('Valor para y2: '))

    //Processamento
    const x = (x2 - x1)**2
    const y = (y2 - y1)**2
    const distancia = Math.sqrt(x + y)

    //Saída
    console.log(`A distância é de ${distancia.toFixed(2)}`)

}
main()
