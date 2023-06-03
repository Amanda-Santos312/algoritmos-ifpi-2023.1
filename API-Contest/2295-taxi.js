import {obter_texto, mostrar_texto} from '../input-utils.js'

function main() {
    const [a, g, r1, r2] = obter_texto().split(' ').map(Number)
    
    const economico = verifica_mais_economico(a, g, r1, r2)

    mostrar_texto(`${economico}`)
}

function verifica_mais_economico(a, g, r1, r2) {
    if ((r1 / a) > (r2 / g)) { 
        return 'A'
    } else { 
        return 'G'
    }
}
//A única que deu certo :(
main()