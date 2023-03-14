/* Índice de Adiposidade Corporal (iac) é um método utilizado para medir a gordura corporal. 
Para o cálculo desse índice são utilizadas medidas antropométricas, como circunferência do quadril e altura.

De acordo com essa informação, peça ao usuário o valor do seu quadril e de sua altura.
Fórmula: IAC = (quadril / (altura * sqrt(altura))) - 18
Se o resultado estiver:
entre 0 e 8.9   -> "Magra";
entre 9 e 20.9  -> "Normal";
entre 21 e 25.9 -> "Sobrepeso"
entre 26 e 29.9 -> "Obesidade grau 1"

Além de mostrar o IAC da pessoa,
calcule para ela qual o quadril mínino e máximo que ela deveria ter para ficar na faixa Normal.
*/

import {question} from 'readline-sync'

function main() {
    //Entrada
    const quadril = Number(question('Digite o valor do seu quadril(cm): ')) //100
    const altura = Number(question('Digite a sua altura(cm): ')) //1.66

    //Processamento
    const iac = Math.floor(calcula_iac(quadril, altura))
    
    const iac_min = Math.floor(calcula_quadril_min(altura)) //57cm
    const iac_max = Math.floor(calcula_quadril_max(altura)) //83cm

    //Saída
    console.log(`\nSeu Índice de Adiposidade Corporal é de ${iac.toFixed(1)}%`) //28%
    
    console.log(`\nPara ficar na faixa de normalidade de IAC, deve se obter o quadril entre ${iac_min} e ${iac_max} cm`)
}

function calcula_iac(quadril, altura) {
    return (quadril / (altura * Math.sqrt(altura))) - 18
}

function calcula_quadril_min(altura) {
    return (9 + 18) * (altura * Math.sqrt(altura))
}

function calcula_quadril_max(altura) {
    return (20.9 + 18) * (altura * Math.sqrt(altura))
}

main()