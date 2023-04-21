import {obter_numero_positivo, mostrar_texto} from './input-utils.js'
//Exemplo de como usar as funções feitas:
function main() {
    const n = obter_numero_positivo()
    mostrar_texto(`${n}`)
}
main()