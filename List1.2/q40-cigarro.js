/* Calcule a quantidade de dinheiro gasto por um fumante. 
Dados de entrada: o número de anos que ele fuma, o n° de cigarros fumados por dia e o preço de uma carteira (1 carteira tem 20 cigarros). */
import {question} from 'readline-sync'

function main() {
    //Entrada
    const anos = Number(question('Quantos anos fumando? '))
    const cigarros_dia = Number(question('Quantos cigarros por dia? '))
    const preco_carteira = Number(question('Valor da carteira? '))

    //Processamento
    const total_cigarros = anos * 365 * cigarros_dia
    const total_carteiras = total_cigarros / 20
    const gasto_total = total_carteiras * preco_carteira

    //Saída
    console.log(`O total gasto com cigarros foi de $${gasto_total.toFixed(2)}`)
}   
main()