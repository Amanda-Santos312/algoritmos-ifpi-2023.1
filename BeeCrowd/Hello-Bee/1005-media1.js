//Leia duas notas e calcule a média ponderada do aluno com os pesos apresentados.
import {question} from 'readline-sync'

function main() {
    const nota_a = Number(question('Nota A: '))
    const nota_b = Number(question('Nota B: '))

    const peso_a = 3.5
    const peso_b = 7.5

    const media_ponderada = calcula_media(nota_a, nota_b, peso_a, peso_b)

    console.log(`MEDIA = ${media_ponderada.toFixed(5)}`)
}

function calcula_media(a, b, peso_a, peso_b) {
    return (a * peso_a) + (b * peso_b) / 11
}

main()