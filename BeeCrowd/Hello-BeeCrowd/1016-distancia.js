//Calcule o tempo em minutos de acordo com a distancia.
import {question} from 'readline-sync'

function main() {
    const distancia = Number(question('\nValor para distancia: '))

    const tempo = distancia * 2

    console.log(`${tempo} minutos`)
}

main()