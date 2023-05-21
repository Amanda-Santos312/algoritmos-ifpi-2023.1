import { obter_numero_positivo } from "../modulo5-Strings/input-output.js"

function main() {
    const nota1 = obter_numero_positivo('Nota1: ')
    const media = obter_numero_positivo('Media: ')

    const nota2 = calcula_nota2(nota1, media)

    console.log(nota2)
}

function calcula_nota2(nota1, media) {
    const x = (media * 2) - nota1
    return x
}

main()