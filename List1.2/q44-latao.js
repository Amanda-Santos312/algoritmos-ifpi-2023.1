/* Sabendo que latão é constituído de 70% de cobre e 30% de zinco, escreva um algoritmo que calcule a
quantidade de cada um desses componentes para se obter certa quantidade de latão (em kg), informada pelo usuário. */
import {question} from 'readline-sync'

function main() {
    //Entrada
    const qtd_cobre = Number(question('Quantidade de cobre em kg: '))
    const qtd_zinco = Number(question('Quantidade de zinco em kg: '))

    //Processamento
    const porcentagem_cobre = qtd_cobre * 0.7
    const porcentagem_zinco = qtd_zinco * 0.3
    
    const latao = porcentagem_cobre + porcentagem_zinco

    //Saída
    console.log(`A quantidade de latão é de ${latao}kg`)

}
main()