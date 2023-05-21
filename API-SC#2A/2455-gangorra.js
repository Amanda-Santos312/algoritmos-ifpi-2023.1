import {mostrar_texto, obter_texto} from '../modulo5-Strings/input-output.js'

function main() {
    const [p1, c1, p2, c2] =  obter_texto().split(' ').map(Number)

    const resultado = verifica_valores(p1, c1, p2, c2)

    mostrar_texto(`${resultado}`)
}

function verifica_valores(p1, c1, p2, c2) {
    if (p1 * c1 === p2 * c2) {
        return 0
    } else if (p1 * c1 > p2 * c2) {
        return -1
    } else {
        return 1
    }
}
main()