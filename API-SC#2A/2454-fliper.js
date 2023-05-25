import { question } from 'readline-sync'

function main() {
    const p = Number(question('0 ou 1: '))
    const r = Number(question('0 ou 1: '))

    const saida = verifica_numeros(p, r)

    console.log(`${saida}`)
}

function verifica_numeros(p, r) {
    if(p === 1 && r === 1) {
        return 'A'
    } else if (p === 1 && r === 0) {
        return 'B'
    } else { //Basta p = 0 para cair em C
        return 'C'
    }
}

main()