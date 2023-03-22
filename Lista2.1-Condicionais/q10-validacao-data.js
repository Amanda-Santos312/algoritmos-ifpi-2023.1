//Leia uma data (dia, mês e ano), verifique e escreva se a data é ou não válida.
import {question} from 'readline-sync'

function main() {
    const data = question('Digite uma data(/): ').split('/').map(Number)
    
    const data_valida = verificar_data(data)

    console.log(`${data_valida}`)
}

function verificar_data(data){
    if (data[0] <= 31 && data[1] <= 12 && data[2] <= 9999){
        return 'Data é válida'
    } else {
        return 'Essa data não é válida!'
    }
}

main()