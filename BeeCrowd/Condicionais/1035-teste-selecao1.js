//Leia quatro valores,se B for maior do que C e se D for maior do que A, e a soma de C com D for maior que a soma de A e B e se C e D, ambos, forem positivos e se a variável A for par escrever a mensagem "Valores aceitos", senão escrever "Valores nao aceitos". 
import {obter_numero_positivo, mostrar_texto, obter_texto} from '../input-utils.js'

function main() {
    const [a, b, c, d] = obter_texto('Valores: ').split(' ').map(Number)

    const validacao = verifica_numero(a, b, c, d)

    mostrar_texto(`${validacao}`)
}

function verifica_numero(a, b, c, d) {
    if (b > c && d > a && (c + d > a + b) && (a, b, c, d > 0) && (a % 2 === 0)) {
        return 'Valores aceitos'
    } else {
        return 'Valores nao aceitos'
    }
}

main()