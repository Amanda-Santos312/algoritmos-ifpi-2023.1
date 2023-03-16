//Leia o valor do raio de uma esfera, calcule e escreva seu volume. (v = (4 * p * r3) / 3) (p = 3,14)
import {input} from '../io_utils.js'

function main() {
    //Entrada
    const pi = 3.14
    const raio = Number(input('Valor para o raio da esfera: '))

    //Processamento
    const volume = (4 * pi * raio**3) / 3

    //Saída
    console.log(`O volume da esfera é ${volume.toFixed(2)}cm³`)
}
main()