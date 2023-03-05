//Leia 3 notas de um aluno e o peso de cada nota, calcule e escreva a média ponderada.
import {input} from '../io_utils.js'

function main() {
    //Entrada
    const nota1 = Number(input('Nota1: '))
    const peso1 = Number(input('Peso para a nota1: '))

    const nota2 = Number(input('Nota2: '))
    const peso2 = Number(input('Peso para a nota2: '))

    const nota3 = Number(input('Nota3: '))
    const peso3 = Number(input('Peso para a nota3: '))

    //Processamento
    const media_ponderada = (nota1 * peso1) + (nota2 * peso2) + (nota3 * peso3) / peso1 + peso2 + peso3

    //Saída
    console.log(`A média ponderada das notas é ${media_ponderada}`)
}
main()