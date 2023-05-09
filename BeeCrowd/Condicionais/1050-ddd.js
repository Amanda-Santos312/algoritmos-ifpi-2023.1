//Leia um numero para ddd e verifique qual cidade ele corresponde.
import {question} from 'readline-sync'

function main() {
    const ddd = Number(question('\nDDD: '))

    const cidade = verifica_ddd(ddd)

    console.log(`${cidade}`)
}

function verifica_ddd(ddd) {
    if (ddd === 11) {
        return 'Sao Paulo'
    } else if (ddd === 19) {
        return 'Campinas'
    } else if (ddd === 21) {
        return 'Rio de Janeiro'
    } else if (ddd === 27) {
        return 'Vitoria'
    } else if (ddd === 31) {
        return 'Belo Horizonte'
    } else if (ddd === 32) {
        return 'Juiz de Fora'
    } else if (ddd === 61) {
        return 'Brasilia'
    } else if (ddd === 71) {
        return 'Salvador'
    } else {
        return 'DDD nao cadastrado'
    }
}

main()