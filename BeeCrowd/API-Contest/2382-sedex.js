//INCOMPLETA
import { obter_texto, mostrar_texto } from '../../input-utils.js'

function main() {
    const [l, a, p, r] = obter_texto().split(' ').map(Number)

    const area_caixa = calcula_area_caixa(l, a, p)

    const area_esfera = calcula_area_esfera(r)

    const cabe_ou_nao = verifica_areas(area_caixa, area_esfera)

    mostrar_texto(`${cabe_ou_nao}`)
}

function calcula_area_caixa(l, a, p) {
    return l * a * p
}


function calcula_area_esfera(r) {
    return (4 * r ** 2 * 3.14)
}

function verifica_areas(area_caixa, area_esfera) {
    if (area_esfera > area_caixa) {
        return 'S'
    } else {
        return 'N'
    }
}
//Não funcionou ;(
main()