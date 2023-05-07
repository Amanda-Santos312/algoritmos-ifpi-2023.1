//Calcule a media ponderada de 3 notas com os seus seguintes pesos.
import {question} from 'readline-sync'

function main() {
    const nota_a = Number(question('Nota A: '))
    const nota_b = Number(question('Nota B: '))
    const nota_c = Number(question('Nota C: '))

    const peso_a = 2
    const peso_b = 3
    const peso_c = 5

    const media_ponderada = calcula_media(nota_a, nota_b, nota_c, peso_a, peso_b, peso_c)
    
    console.log(`MEDIA = ${media_ponderada}`)
}

function calcula_media(nota_a, nota_b, nota_c, peso_a, peso_b, peso_c) {
    return (nota_a * peso_a + nota_b * peso_b + nota_c * peso_c) / (peso_a + peso_b + peso_c)
}

main()