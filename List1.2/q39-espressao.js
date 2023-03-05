//Leia três números inteiros e positivos (A, B, C) e calcule a seguinte expressão: D = (R + S) / 2 , onde R= (A + B)²  e S=(B + C)²
import {input} from '../io_utils.js'

function main() {
//Entrada
    const a = Number(input('Número 1: '))
    const b = Number(input('Número 2: '))
    const c = Number(input('Número 3: '))

//Processamento
    const r = (a + b) * (a + b) 
    const s = (b + c) * (b + c) 

    const d = (r + s) / 2

    console.log(`A expressão tem valor ${d}`)
}
main()

