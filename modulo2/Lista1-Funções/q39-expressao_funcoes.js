//Leia três números inteiros e positivos (A, B, C) e calcule a seguinte expressão: D = (R + S) / 2 , onde R= (A + B)²  e S=(B + C)²
import {question} from 'readline-sync'

function main() {
    //Entrada
    const a = Number(question('Número 1: '))
    const b = Number(question('Número 2: '))
    const c = Number(question('Número 3: '))

    //Processamento
    const r = calcula_r(a, b)
    const s = calcula_s(b, c)

    const expressao = (r + s) / 2
    
    //Saída
    console.log(`\nA expressão tem valor: ${expressao}`)
}

function calcula_r(a, b) {
    return (a + b) * (a + b)
}

function calcula_s(b, c) {
    return (b + c) * (b + c)
}

main()   