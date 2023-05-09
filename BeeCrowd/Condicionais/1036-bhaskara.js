//Leia três valores e efetue o cálculo das raízes de Bhaskara.
import {question} from 'readline-sync'

function main() {
    const a = Number(question('\nValor para A: '))
    const b = Number(question('Valor para B: '))
    const c = Number(question('Valor para C: '))

    const delta = b**2 - (4 * a * c)

    const r1 = (-b + Math.sqrt(delta)) / (2 * a)
    const r2 = (-b - Math.sqrt(delta)) / (2 * a)

    if (a === 0 || delta < 0) {
        console.log(`Impossivel calcular!`)
    } else {
        console.log(`R1 = ${r1.toFixed(5)}`)
        console.log(`R2 = ${r2.toFixed(5)}`)
    }

}
main()