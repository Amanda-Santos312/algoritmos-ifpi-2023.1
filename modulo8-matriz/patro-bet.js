import { enter_limpar_tela, mostrar_texto, obter_numero, obter_numero_positivo } from "../input-utils.js"
import { quicksort } from '../modulo7-Ordenação/quick-sort.js'
import { show_matriz } from './matriz-utils.js'

function main() {
    let opcao = obter_numero(menu())
    const bilhetes = []

    while (opcao != 0) {
        mostrar_texto(`Você escolheu a opção ${opcao}`)

        if (opcao === 1) {
            vender_bilhetes(bilhetes)
        } else if (opcao === 5) {
            show_bilhetes(bilhetes)
        }

        enter_limpar_tela()
        opcao = obter_numero(menu())
    }
    mostrar_texto('See you later!')
}

function menu() {
    let opcoes = '-----> PATRO BET <-----'
    opcoes += '\n1 - Vender Bilhete(s)'
    opcoes += '\n2 - Mostrar Bilhetes'
    opcoes += '\n0 - Sair'

    return opcoes
}

//Opção 1:
function vender_bilhetes(bilhetes) {
    const quantidade = obter_numero_positivo('Quantos')

    for (let i = 0; i < quantidade; i++) {
        const novo_bilhete = gerar_surpresinha()

        bilhetes.push(novo_bilhete)
    }
    mostrar_texto(`${quantidade} bilhetes gerados!`)
}


function gerar_surpresinha() {
    const bilhete = []

    while (bilhete.length < 6) {
        let numero_aleatorio = obter_dezena_valida()
        if (!contem_item_colecao(bilhete, numero_aleatorio)) {
            bilhete.push(numero_aleatorio)
        }
    }
    return quicksort(bilhete)
}


function obter_dezena_valida() {
    return Math.floor(Math.random() * 60 + 1)
}


function contem_item_colecao(bilhete, valor) {
    for (let item of bilhete) {
        if (item === valor) {
            return true
        }
    }
    return false //Se não estiver > false
}

//Opcao 2:
function show_bilhetes(bilhetes) {
    mostrar_texto('Bilhetes Gerados Da PatroBet:')

    bilhetes = quicksort(bilhetes, b => b.reduce((acc, a) => acc + a), 0)

    if (bilhetes.length < 1) {
        mostrar_texto('Não há bilhetes ainda')
        return
    }

    show_matriz(bilhetes)
}

main()
