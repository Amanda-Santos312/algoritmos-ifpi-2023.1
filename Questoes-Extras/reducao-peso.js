/* Uma pessoa estabeleceu como meta perder X % do Peso Corporal em Y semanas. 
Sabendo que 1 kg de gordura corresponde a cerca de 7700 kcal, calcule o déficit calórico médio diário necessário para alcançar essa meta. 
Pergunte ao usuário qual seu Peso atual, qual sua meta % de redução de Peso e em quantas semanas. 
Pergunte ainda quanto ele tá disposto a consumir de kcal diariamente. 
Seu objetivo é informar ao usuário qual deve ser seu deficit calórico diário médio e 
também quanto de exercícios diários ele deve fazer para alcançar esse deficit alvo considerando sua ingestão calórica informada.
*/

import {question} from 'readline-sync'

function main() {
    //Entrada
    const peso = Number(question('Digite o valor do seu peso: '))
    const meta = Number(question('Digite sua meta de emagrecimento(%): '))
    const semanas = Number(question('Quantas semanas? ')) 

    //Processamento
    const deficit_calorico_diario = calcula_deficit_calorico_diario(peso, meta) // peso - metas = deficit cal diario
    const dias = calcula_dias(semanas) // dias = semanas * 7 
    const kcal_totais = calcula_kcal_totais(deficit_calorico_diario) // kcal totais = deficit cal * 7700kcal 
    const kcal_diarias = calcula_kcal_diarias(kcal_totais, dias) // kcal diarias = kcal totais / dias 

    console.log(`\nSeu deficit calórico diário tem que ser de ${kcal_diarias.toFixed(2)} kcal`)

    const consumo_kcal = Number(question('\nMas quanto deseja consumir de kcal por dia?  '))
    const gasto_diario = calcula_gasto_diario(kcal_diarias,consumo_kcal)
    
    //Saída
    console.log('\nPara atingir o objetivo:')
    
    console.log(`Você tem que gastar diariamente ${gasto_diario.toFixed(2)} kcal com atividades físicas!`)

    console.log()
}

function calcula_deficit_calorico_diario(peso, meta) {
    return peso * (meta / 100)
}

function calcula_dias(semanas) {
    return semanas * 7
}

function calcula_kcal_totais(deficit_calorico_diario) {
    return deficit_calorico_diario * 7700
}

function calcula_kcal_diarias(kcal_totais, dias) {
    return kcal_totais / dias
}

function calcula_gasto_diario(kcal_diarias,consumo_kcal) {
    return kcal_diarias + consumo_kcal
}

main()