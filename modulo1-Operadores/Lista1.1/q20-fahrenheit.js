//Leia uma temperatura em °C, calcule e escreva a equivalente em °F. (t°F = (9 * t°C + 160) / 5)
import {input} from '../io_utils.js'

function main() {
    //Entrada
    const celsius = Number(input('Temperatura em Celsius: '))

    //Processamento
    const celsius_fahrenheit = ((9 * celsius) + 160) / 5

    //Saída
    console.log(`A temperatura em fahreheit é ${celsius_fahrenheit.toFixed(1)}°F`)
}
main()