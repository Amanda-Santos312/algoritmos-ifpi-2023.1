
import {obter_texto, mostrar_texto} from '../input-utils.js'

function main() {
    const [a, d] = obter_texto().split(' ').map(Number)

    const qtd_pessoas = a + 2

    const dias = d / qtd_pessoas

    mostrar_texto(`${dias.toFixed(2)}`)
}
main()