//Leia data atual (dia, mês e ano) e data de nascimento (dia, mês e ano) de uma pessoa, calcule e escreva sua idade exata (em anos).
import {question} from 'readline-sync'

function main() {
    const data_atual = question('Data de hoje(/): ').split('/').map(Number)
    const data_nascimento = question('Data, de nascimento(/): ').split('/').map(Number)

    const idade = calcula_idade(data_atual, data_nascimento)

    console.log(`A idade é de ${idade} anos!`)
}

function calcula_idade(data_atual, data_nascimento) {
    const ano =  data_atual[3] - data_nascimento[3]
    return ano
}

main()