//Leia um valor em minutos, calcule e escreva o equivalente em horas e minutos.
import {input} from '../io_utils.js'

function main() {
    //Entrada
    const minutos = Number(input('Diite um valor para minutos: '))

    //Processamento
    const min = minutos % 60 //Os minutos serão só o resto da divisão
    const horas = (minutos - min) / 60 

    //Saída
    console.log(`${horas}h e ${min}min`)
}
main()