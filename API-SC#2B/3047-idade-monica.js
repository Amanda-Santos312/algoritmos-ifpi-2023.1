import {obter_numero_positivo, mostrar_texto} from '../modulo5-Strings/input-output.js'

function main() {
    const idade_monica = obter_numero_positivo('Idade de monica: ')
    const idade_filho1 = obter_numero_positivo('Idade do filho1: ')
    const idade_filho2 = obter_numero_positivo('Idade do filho2: ')

    const soma_idades = idade_filho1 + idade_filho2

    const idade_filho3 = calcula_idade_do_filho3(idade_monica, soma_idades)

    const mais_velho = idade_filho_mais_velho(idade_filho1, idade_filho2, idade_filho3)

    mostrar_texto(mais_velho)
}

function calcula_idade_do_filho3(idade_monica, soma_idades) {
    const x = idade_monica - soma_idades
    return x
}


function idade_filho_mais_velho(idade_f1, idade_f2, idade_f3) {
    if (idade_f1 > idade_f2 && idade_f1 > idade_f3) {
        return idade_f1

    } else if (idade_f2 > idade_f1 && idade_f2 > idade_f3) {
        return idade_f2

    } else {
        return idade_f3
    }
}

main()