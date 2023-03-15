//Leia uma temperatura em °F, calcule e escreva a equivalente em °C. (t°C = (5 * t°F - 160) / 9)
import {question} from 'readline-sync'

function main() {
    //Entrada
    const fahreheit = Number(question('Temperatura em Fahrenheit: '))

    //Processamento
    const celsius = transforma_fahrenheit_celsius(fahreheit)

    //Saída
    console.log(`\nA temperatura em Celsius é ${celsius.toFixed(1)}°C`)
}

function transforma_fahrenheit_celsius(fahreheit) {
    return ((5 * fahreheit) - 160) /9
}

main()    
