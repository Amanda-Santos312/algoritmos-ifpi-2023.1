import { mostrar_texto, obter_texto } from '../modulo5-Strings/input-output.js'

function main() {
    const dna_bacteria1 = [obter_texto('DNA da bacteria: ')]
    const cod_resistencia1 = [obter_texto('Código de resistencia: ')]
    //const dna_bacteria2 = obter_texto()
    //const cod_resistencia2 = obter_texto()

    const resultado1 = verifica_resultado1(dna_bacteria1, cod_resistencia1)
    //const resultado2 = verifica_resultado2(dna_bacteria2, cod_resistencia2)

    mostrar_texto(`${resultado1}`)
    //mostrar_texto(`${resultado2}`)
}

function verifica_resultado1(dna_bacteria1, cod_resistencia1) {
    let item = ' '
    for (item in dna_bacteria1) {
        if (item == cod_resistencia1) {
            return true
        }
    }return false 
}
main()