/* Taxa Metábolica Basal (tmb) é a quantidade de energia necessária para a manutenção das funções vitais do organismo ao longo de 24 horas.

De acordo com  essa informação, peça ao usuário os valores de seu peso(kg), altura(cm), idade(anos), e calcule a TMB dessa pessoa.
Fórmula para homens: TMB = 88.36 + (13.4 * peso) + (4.8 * altura) - (5.7 * idade).
Arredonde o valor da TMB para o inteiro mais próximo utilizando a função Math.floor. 
*/

import {question} from 'readline-sync'

function main() {
    //Entrada
    const peso = Number(question('Digite o valor do seu peso: '))
    const altura = Number(question('Digite o valor da sua altura(cm): '))
    const idade = Number(question('Digite a sua idade: '))

    //Processamento
    const tmb = Math.floor(calcula_tmb(peso, altura, idade))

    //Saída
    console.log(`Sua taxa metabólica basal é de ${tmb} kcal`)
}

function calcula_tmb(peso, altura, idade) {
    return 88.36 + (13.4 * peso) + (4.8 * altura) - (5.7 * idade)
}

main()