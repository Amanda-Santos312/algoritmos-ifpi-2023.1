/* Leia 2 (duas) notas parciais de um aluno, calcule a média e escreva a mensagem:
o "Aprovado", se a média alcançada for maior ou igual a sete;
o "Reprovado", se a média for menor do que sete;
o "Aprovado com Distinção", se a média for igual a dez. */
import {question} from 'readline-sync'

function main() {
    const nota1 = Number(question('Nota1: '))
    const nota2 = Number(question('Nota2: '))

    const media = calcula_media(nota1, nota2)
    const situacao = verifica_situacao(media)

    console.log(`\nMédia: ${media}`)
    console.log(`Situação do aluno: ${situacao}`)
}

function calcula_media(nota1, nota2) {
    return (nota1 + nota2) / 2
}

function verifica_situacao(media) {
    if (media >= 10) {
        return 'Aprovado com Distinção!'
    } else if (media >= 7) {
        return 'Aprovado'
    } else {
        return 'Reprovado'
    }
}   

main()