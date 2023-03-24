/* Leia o preço de três produtos e informe qual produto deve ser comprado, sabendo que a decisão é 
sempre pelo mais barato. */
import {question} from 'readline-sync'

function main() {
    const pro1 = Number(question('Valor para produto1: '))
    const pro2 = Number(question('Valor para produto2: '))
    const pro3 = Number(question('Valor para produto3: '))

    const mais_barato = verifica_preco (pro1, pro2, pro3)

    console.log(`\nO mais barato é o ${mais_barato}`)
}   

function verifica_preco(pro1, pro2, pro3) {
    if (pro1 < pro2 && pro1 < pro3) {
        return (`Produto1: R$ ${pro1} reais`)
    } else if (pro2 < pro1 && pro2 < pro3) {
        return (`Produto2: R$ ${pro2} reais`)
    } else {
        return (`Produto3: R$ ${pro3} reais`)
    }
}

main()