/* Leia as duas notas parciais obtidas por um aluno numa disciplina ao longo de um semestre, e calcule a 
sua média. A atribuição de conceitos obedece à tabela abaixo:
 Média de Aproveitamento Conceitos
 Entre 9.0 e 10.0 A
 Entre 7.5 e 9.0 B
 Entre 6.0 e 7.5 C
 Entre 4.0 e 6.0 D
 Entre 4.0 e zero E */
import {question} from 'readline-sync'

function main() {
    const nota1 = Number(question('Nota1: '))
    const nota2 = Number(question('Nota2: '))

    const media = calcula_media(nota1, nota2)
    const conceito = verifica_conceito(media)

    console.log(`\nA sua média é de ${media.toFixed(1)} e o seu conceito é ${conceito}`) 
}

function calcula_media(nota1, nota2) {
    return (nota1 + nota2) / 2
}

function verifica_conceito(media) {
    if(media >= 9 && media <= 10) {
        return 'A - APROVADO'
    } else if (media >= 7.5 && media < 9) {
        return 'B - APROVADO'
    } else if (media >= 6 && media < 7.5) {
        return 'C - APROVADO'
    } else if (media >= 4 && media < 6) {
        return 'D - REPROVADO'
    } else {
        return 'E - REPROVADO'
    }
}

main()