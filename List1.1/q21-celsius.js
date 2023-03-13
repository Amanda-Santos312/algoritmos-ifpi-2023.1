//Leia uma temperatura em °F, calcule e escreva a equivalente em °C. (t°C = (5 * t°F - 160) / 9)
import {input} from '../io_utils.js'

function main() {
    //Entrada
    const fahreheit = Number(input('Temperatura em Fahrenheit: '))

    //Processamento
    const fahreheit_celsius = ((5 * fahreheit) - 160) / 9

    //Saída
    console.log(`A temperatura em Celsius é ${fahreheit_celsius.toFixed(1)}°C`)
}
main()