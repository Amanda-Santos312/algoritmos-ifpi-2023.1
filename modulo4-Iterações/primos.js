//Número que só é divisivél por 1 e ele mesmo
import {mostrar_texto, obter_numero_positivo} from './input-utils.js'
import {eh_primo} from './math-utils.js'

function main() {
    const inicio = obter_numero_positivo()
    const fim = obter_numero_positivo()

    let atual = inicio

    while(atual <= fim){
        if (eh_primo(atual)) {
            mostrar_texto(`> ${atual}`)
        }
        atual++
    }
}

main()