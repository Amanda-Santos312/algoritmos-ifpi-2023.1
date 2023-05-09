//Leia três palavras para descobrir de qual animal elas se referem.
import {question} from 'readline-sync'

function main() {
    console.log('\n----> ANIMAL <----')
    const palavra1 = question('\nPalavra1: ')
    const palavra2 = question('Palavra2: ')
    const palavra3 = question('Palavra3: ')

    const animal = verifica_palavras(palavra1, palavra2, palavra3)

    console.log(`\n> ${animal}`)
}

function verifica_palavras(p1, p2, p3) {
    if (p1 === 'vertebrado' && p2 === 'ave' && p3 === 'carnivoro') {
        return 'aguia'
    } else if (p1 === 'vertebrado' && p2 === 'ave' && p3 === 'onivoro') {
        return 'pomba'
    } else if (p1 === 'vertebrado' && p2 === 'mamifero' && p3 === 'onivoro') {
        return 'homem'
    } else if (p1 === 'vertebrado' && p2 === 'mamifero' && p3 === 'herbivoro') {
        return 'vaca'
    } else if (p1 === 'invertebrado' && p2 === 'inseto' && p3 === 'hematofago') {
        return 'pulga'
    } else if (p1 === 'invertebrado' && p2 === 'inseto' && p3 === 'herbivoro') {
        return 'lagarta'
    } else if (p1 === 'invertebrado' && p2 === 'anelideo' && p3 === 'hematofago') {
        return 'sanguesuga'
    } else {
        return 'minhoca'
    }
}
main()