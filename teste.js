import {readFileSync} from 'fs'
import { mostrar_texto } from './BeeCrowd/input-utils.js'

function main() {
    const palavras = readFileSync("words.txt")

    mostrar_texto(`${palavras}`)
}
main()
