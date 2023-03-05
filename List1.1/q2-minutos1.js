//Leia um valor em horas e um valor em minutos, calcule e escreva o equivalente em minutos.
import {input} from '../io_utils.js'

function main () {
    //Entrada
    const horas = Number(input('Digite um valor para horas: '))
    const minutos = Number(input('Digite um valor para minutos: '))

    //Processamento
    const horas_minutos = horas * 60

    const soma = horas_minutos + minutos

    //Saída
    console.log(`${soma} minutos`)
}
main()
