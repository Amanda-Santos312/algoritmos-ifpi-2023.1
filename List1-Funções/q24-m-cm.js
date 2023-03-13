//Leia um valor em m, calcule e escreva o equivalente em cm.
import {question} from 'readline-sync'

function main() {
    //Entrada
    const m = Number(question('Valor para metros: '))

    //Processamento
    const cm = transforma_m_cm(m)

    //Saída
    console.log(`\nO valor em centímetros é ${cm}`)
}

function transforma_m_cm(m) {
    return m * 100
}

main()    