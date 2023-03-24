/* Leia uma letra e verifique se a letra digitada é vogal ou consoante */
import {question} from 'readline-sync'

function main() {
    const letra = question('Digite uma letra em minusculo: ')

    const tipo_letra = verifica_letra(letra)

    console.log(`\nEssa letra é uma ${tipo_letra}`)

}

function verifica_letra(letra) {
    if (letra === 'a' || letra === 'e' || letra === 'i' || letra === 'o' || letra === 'u') {
        return 'vogal'
    } else {
        return 'consoante'
    }
}

main()