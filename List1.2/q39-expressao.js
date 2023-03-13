//Leia três números inteiros e positivos (A, B, C) e calcule a seguinte expressão: D = (R + S) / 2 , onde R= (A + B)²  e S=(B + C)²
import {question} from 'readline-sync'

function main() {
    //Entrada
    const a = Number(question('Número 1: '))
    const b = Number(question('Número 2: '))
    const c = Number(question('Número 3: '))

    //Processamento
    const r = (a + b) * (a + b) 
    const s = (b + c) * (b + c) 

    const d = (r + s) / 2

    //Saída
    console.log(`A expressão tem valor: ${d}`)
}
main()

