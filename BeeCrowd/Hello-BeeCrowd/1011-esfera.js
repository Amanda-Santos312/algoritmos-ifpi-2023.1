//Leia raio e calcule o volume de uma esfera.
import {question} from 'readline-sync'

function main() {
    const pi = 3.14159
    const raio = Number(question('\nValor para raio: '))

    const volume = calcula_volume(pi, raio)

    console.log(`\nVOLUME = ${volume.toFixed(3)}`)
}

function calcula_volume(pi, raio) {
    return (4/3) * pi * raio**3
}

main()