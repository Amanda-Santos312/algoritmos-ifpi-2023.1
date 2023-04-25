//Leia as variáveis A0, Limite e R e escreva os valores menores que Limite gerados pela Progressão Geométrica que tem por valor inicial A0 e razão R.
import { obter_numero_positivo } from '../input-utils.js'

function main() {
    let ao = obter_numero_positivo('A0: ')
    const limite = obter_numero_positivo('Valor final: ')
    const razao = obter_numero_positivo('Razao: ')

    while (ao <= limite) {
        console.log(ao)
        ao = ao * razao
    }
}

main()