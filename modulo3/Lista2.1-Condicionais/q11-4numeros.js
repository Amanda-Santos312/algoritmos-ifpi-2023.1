/* Leia quatro números (opção, num 1, num2, num3) e que escreva o valor de num1 se opção igual a 1; 
o valor de num2 se opção for igual a 2; e o valor de num3 se opção for igual a 3. 
Os únicos valores possíveis para a variável opção são 1, 2 e 3 */
import {question} from 'readline-sync'

function main() {
    const opcao = Number(question('Digite um numero para opcao: '))
    const num1 = Number(question('Primeiro numero: '))
    const num2 = Number(question('Segundo numero: '))
    const num3 = Number(question('Terceiro numero: '))

    const valor = verifica_opcao(opcao, num1, num2, num3)

    console.log(`\n${valor}`)
}

function verifica_opcao(opcao, num1, num2, num3) {
    if (opcao == num1) {
        return 'Opção é igual ao primeiro numero!'
    } else if (opcao == num2) {
        return 'Opção é igual ao segundo numero!'
    } else if (opcao == num3) {
        return 'Opção é igual ao terceiro numero!'
    } else {
        return 'Nenhum número é igual a opção!'
    }
}

main()