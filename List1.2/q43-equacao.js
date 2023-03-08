/* Um sistema de equações lineares do tipo , pode ser resolvido segundo mostrado abaixo -VER FÓRMULA-
Escreva um algoritmo que leia os coeficientes a, b, c, d, e e f, calcule e escreva os valores de x e y. */
import {question} from 'readline-sync'

function main() {
    //Entrada
    const a = Number(question('Valor para a: '))
    const b = Number(question('Valor para b: '))
    const c = Number(question('Valor para c: '))
    const d = Number(question('Valor para d: '))
    const e = Number(question('Valor para e: '))
    const f = Number(question('Valor para f: '))

    //Processamento
    const x = (c*e) - (b*f) / (a*e) - (b*d)
    const y = (a*f) - (c*d) / (a*e) - (b*d)

    console.log(`X corresonde a ${x.toFixed(1)} e Y a ${y.toFixed(1)}`)
}
main()

