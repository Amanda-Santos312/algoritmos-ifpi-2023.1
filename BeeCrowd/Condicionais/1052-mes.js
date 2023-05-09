//Leia um numero e verifique qual mes ele corresponde.
import {question} from 'readline-sync'

function main() {
    const mes = Number(question('\nNumero para mes: '))

    const mes_de = verifica_mes(mes)

    console.log(`> ${mes_de}`)
}

function verifica_mes(mes) {
    if (mes === 1) {
        return 'January'
    } else if (mes === 2) {
        return 'February'
    } else if (mes === 3) {
        return 'March'
    } else if (mes === 4) {
        return 'April'
    } else if (mes === 5) {
        return 'May'
    } else if (mes === 6) {
        return 'June'
    } else if (mes === 7) {
        return 'July'
    } else if (mes === 8) {
        return 'August'
    } else if (mes === 9) {
        return 'September'
    } else if (mes === 10) {
        return 'October'
    } else if (mes === 11) {
        return 'November'
    } else if (mes === 12) {
        return 'December'
    } else {
        return 'Valor não corresponde a nenhum mês!'
    }
} 

main()