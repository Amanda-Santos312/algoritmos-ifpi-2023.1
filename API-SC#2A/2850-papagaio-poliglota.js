import { obter_texto } from '../modulo5-Strings/input-output.js'

function main() {
    const perna = obter_texto()

    const resultado = verifica_perna(perna)
    
    console.log(`\n${resultado}`)

}


function verifica_perna(perna) {
    if (perna === 'esquerda' ) {
        return 'ingles'
    } else if (perna === 'direita') {
        return 'frances'
    } else if (perna === 'nenhuma') {
        return 'portugues'
    } else {
        return 'caiu'
    }
}

main()