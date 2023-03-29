/* . Faça 5 perguntas para uma pessoa sobre um crime. As perguntas são:
a) "Telefonou para a vítima ?"
b) "Esteve no local do crime ?"
c) "Mora perto da vítima ?"
d) "Devia para a vítima ?"
e) "Já trabalhou com a vítima ?"
O algoritmo deve no final emitir uma classificação sobre a participação da pessoa no crime. Se a pessoa 
responder positivamente a 2 questões ela deve ser classificada como "Suspeita", entre 3 e 4 como 
"Cúmplice" e 5 como "Assassino". Caso contrário, ele será classificado como "Inocente". */
import {question} from 'readline-sync'

function main() {
    const perg1 = Number(question('Telefonou para a vítima? '))
    const perg2 = Number(question('Esteve no local do crime? '))
    const perg3 = Number(question('Mora perto da vítima? '))
    const perg4 = Number(question('Devia para a vítima? '))
    const perg5 = Number(question('Já trabalhou com a vítima? '))

    const qtd_sim = conta_sim(perg1, perg2, perg3, perg4, perg5)
    const classificacao = classifica_sim(qtd_sim)

    console.log(`\n${qtd_sim}`)
    console.log(`${classificacao}`)
}

function conta_sim(perg1, perg2, perg3, perg4, perg5) {
    let contator = 0

    if (perg1 === 'sim') {
        contator = contator + 1
    } if (perg2 === 'sim') {
        contator = contador + 1
    } if (perg3 === 'sim') {
        contator = contator + 1
    } if (perg4 === 'sim') {
        contator = contator + 1
    } if (perg5 === 'sim') {
        contator = contator +1
    } 

    return contator
}

function classifica_sim(qtd_sim) {
    if(qtd_sim === 5) {
        return 'Assasino'
    } else if (qtd_sim === 3 || qtd_sim === 4) {
        return 'Cúmplice'
    } else if (qtd_sim === 2) {
        return 'Suspeito'
    } else {
        return 'Inocente'
    }
}

main()