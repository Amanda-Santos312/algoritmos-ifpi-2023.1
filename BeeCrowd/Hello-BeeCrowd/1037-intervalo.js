//Digite um valor e verifique em qual initervalo ele pertence
import {question} from 'readline-sync'

function main() {
    const valor = Number(question('\nDigite um valor: '))

    const intervalo = verifica_intervalo(valor)

    if (intervalo !== false) {
        console.log(`${intervalo}`)
    } else {
        console.log(`Fora de intervalo`)
    }
}

function verifica_intervalo(valor) {
    if (valor >= 0 && valor <= 25) {
        return 'Intervalo [0,25]'
    } else if (valor > 25 && valor <= 50) {
        return 'Intervalo (25,50]'
    } else if (valor > 50 && valor <= 75) {
        return 'Intervalo (50,75]'
    } else if (valor > 75 && valor <= 100) {
        return 'Intervalo (75,100]'
    } else {
        return false
    }
}

main()