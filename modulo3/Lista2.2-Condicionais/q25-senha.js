/* Verifique a validade de uma senha fornecida pelo usuário. 
A senha é 1234. O algoritmo deve escrever uma mensagem de permissão de acesso ou não.*/
import {question} from 'readline-sync'

function main() {
    const senha = Number(question('Digite uma senha de 4 digitos: '))

    const acesso = verifica_senha(senha)

    console.log(`\n${acesso}`)
}

function verifica_senha(senha) {
    if(senha == '1234') {
        return 'Acesso liberado!'
    } else {
        return 'Acesso negado!'
    }
}

main()