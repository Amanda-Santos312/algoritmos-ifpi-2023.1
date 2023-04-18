//Leia 5 (cinco) números inteiros, calcule a sua média e escreva os que são maiores que a média.
import {question} from 'readline-sync'

function main() {
    const nota1 = Number(question('Nota1: '))
    const nota2 = Number(question('Nota2: '))
    const nota3 = Number(question('Nota3: '))
    const nota4 = Number(question('Nota4: '))
    const nota5 = Number(question('Nota5: '))

    const media = calcula_media(nota1, nota2, nota3, nota4, nota5)

    console.log(`\nMédia: ${media}`)

    const nota_maior = nota_media(media, nota1, nota2, nota3, nota4, nota5)

    console.log(`\nA nota maior que a média é: ${nota_maior}`)
}

function calcula_media(nota1, nota2, nota3, nota4, nota5) {
    return (nota1 + nota2 + nota3 + nota4 + nota5) / 5
}

function nota_media (media, nota1, nota2, nota3, nota4, nota5) {
    if (nota1 > media) {
        return 'Nota1'
    } else if (nota2 > media) {
        return 'Nota2'
    } else if (nota3 > media) {
        return 'Nota3'
    } else if (nota4 > media) {
        return 'Nota4'
    } else if (nota5 > media) {
        return 'Nota5'
    } else {
        return 'Não tem!'
    }
}

main()