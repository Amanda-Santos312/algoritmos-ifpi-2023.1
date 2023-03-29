/* Leia um número inteiro menor que 1000 e imprima a quantidade de centenas, dezenas e unidades do 
número. Observando os termos no plural a colocação do "e", da vírgula entre outros. Exemplos:
o 326 = 3 centenas, 2 dezenas e 6 unidades
o 12 = 1 dezena e 2 unidades */
import {question} from 'readline-sync'

function main() {
    const numero = Number(question('Digite um numero ate 999: '))

    const centena = verifica_centena(numero)
    const dezena = verifica_dezena(numero)
    const unidade = verifica_unidade(numero)

    const elementos = junta_elementos(centena, dezena, unidade)

    console.log(`${elementos}`)
}
                                     //234
function verifica_centena(numero) {
    return Math.floor(numero / 100) 
}

function verifica_dezena(centena) {
    return Math.floor(centena / 100) //
}

function verifica_unidade(dezena) {
    return (dezena % 10)
}

function junta_elementos(centena, dezena, unidade) {
    if (centena > 1 && dezena > 1 && unidade > 1) { //A partir de 2. ex 2 centenas
        return (`${centena} centenas, ${dezena} dezenas e ${unidade} unidades`)
    } else /*if (centena === 1 || dezena === 1 || unidade === 1)*/ { 
        return (`${centena} centena, ${dezena} dezena e ${unidade} unidade`)
    }
}

main()