/* Taxa Metábolica Basal (tmb) é a quantidade de energia necessária para a manutenção das funções vitais do organismo ao longo de 24 horas.

De acordo com  essa informação, peça ao usuário o peso(kg), a altura(cm), a idade(anos), o seu genero(M ou F) e calcule a TMB dessa pessoa.
Fórmula para mulheres: TMB = 447.6 + (9.2 * peso) + (3.1 * altura) - (4.3 * idade).
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
    return 447.6 + (9.2 * peso) + (3.1 * altura) - (4.3 * idade)
}

main()