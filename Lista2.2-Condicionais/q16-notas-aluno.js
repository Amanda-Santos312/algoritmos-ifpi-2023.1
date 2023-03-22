/* Leia duas notas de um aluno e escreva na tela a palavra “Aprovado” se a média das duas notas for maior ou igual a 7,0. 
Caso a média seja inferior a 7,0, o programa deve ler a nota do exame e calcule a média final. 
Se esta média for maior ou igual a 5,0, o programa deve escreva “Aprovado”, caso contrário deve escreva “Reprovado”. */
import {question} from 'readline-sync'

function main() {
    const nota1 = Number(question('Nota1: '))
    const nota2 = Number(question('Nota2: '))

    const media_semestral = calcula_media(nota1, nota2)
    const situacao = verifica_situacao(media_semestral, 'semestral')

    console.log(`\nSua média é ${media_semestral.toFixed(1)} e sua situação é de ${situacao}!`)

    if (situacao == 'Prova Final') {
        const nova_pf = Number(question('Nova nota: '))

        const media_final = calcula_media(nova_pf, media_semestral)

        const situacao_final = verifica_situacao(media_final, 'momento-pf')

        console.log(`\nSua média final é ${media_final.toFixed(2)}`)
        console.log(`Sua situação final é de ${situacao_final}`)

    } else {
        console.log(`Você não vai fazer Prova Final pois você foi ${situacao}`)
    }
}

function calcula_media(nota1, nota2) {
    return (nota1 + nota2) / 2
}

function verifica_situacao(media, momento) {
    if (momento == 'semestral') {
        if (media >= 7) {
            return 'Aprovado'
        } else if (media >= 4) {
            return 'Prova Final'
        } else {
            return 'Reprovado'
        }
    } else {
        if (media >= 6) {
            return 'Aprovado PF'
        } else {
            return 'Reprovado PF'
        }
    }
}

main()