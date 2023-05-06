//Leia 3 valores e calcule a área dos elementos.
import {question} from 'readline-sync'

function main() {
    const a = Number(question('\nValor para A: '))
    const b = Number(question('Valor para B: '))
    const c = Number(question('Valor para C: '))
    const pi = 3.14159

    const triangulo = calcula_area_triangulo(a, c)
    const circulo = calcula_area_circulo(c, pi)
    const trapezio = calcula_area_trapezio(a, b, c)
    const quadrado = calcula_area_quadrado(b)
    const retangulo = calcula_area_retangulo(a, b)

    console.log(`\n
    ----> ÁREAS: <----
    TRIANGULO: ${triangulo.toFixed(3)}
    CIRCULO: ${circulo.toFixed(3)}
    TRAPEZIO: ${trapezio.toFixed(3)}
    QUADRADO: ${quadrado.toFixed(3)}
    RETANGULO: ${retangulo.toFixed(3)}`)
}

function calcula_area_triangulo(a, c) {
    return (a * c) / 2
}


function calcula_area_circulo(c, pi) {
    return pi * c**2
}


function calcula_area_trapezio(a, b, c) {
    return ((a + b) * c) / 2
}


function calcula_area_quadrado(b) {
    return b**2
}


function calcula_area_retangulo(a, b) {
    return a * b
}

main()