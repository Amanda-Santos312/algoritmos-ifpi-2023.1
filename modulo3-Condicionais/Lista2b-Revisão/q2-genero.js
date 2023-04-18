/* Leia uma letra, verifique se letra é "F" ou "M" e escreva F - Feminino, M - Masculino, Sexo Inválido. */
import {question} from 'readline-sync'

function main() {
    const letra = question('Digite uma letra para genero: ')

    const tipo_genero = verifica_letra(letra)

    console.log(`\nEssa letra corresponde a ${tipo_genero}`)
}

function verifica_letra(letra) {
    if (letra === 'F' || letra === 'f') {
        return 'Feminino'
    } else if (letra === 'M' || letra === 'm') {
        return 'Masculino'
    } else {
        return 'Gênero Inválido!'
    }
}

main()