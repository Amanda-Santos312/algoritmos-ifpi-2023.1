/* Leia o turno em que um aluno estuda, sendo M para matutino, V para Vespertino ou N para Noturno e 
escreva a mensagem "Bom Dia!", "Boa Tarde!" ou "Boa Noite!" ou "Valor Inválido!", conforme o caso. */
import {question} from 'readline-sync'

function main() {
    const turno = question('Letra para um turno: ')

    const saudacao = verifica_turno(turno)

    console.log(`\n${saudacao}`)
}

function verifica_turno(turno) {
    if (turno === 'M' || turno === 'm') {
        return 'Matutino - Bom diaa'
    } else if (turno === 'V' || turno === 'v') {
        return 'Vespertino - Boa tardee'
    } else if (turno === 'N' || turno === 'n') {
        return 'Noturno - Boa noitee'
    } else {
        return 'Turno Invalido!'
    }
}

main()