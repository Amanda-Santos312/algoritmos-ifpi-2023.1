/* Índice de Adiposidade Corporal (iac) é um método utilizado para medir a gordura corporal. 
Para o cálculo desse índice são utilizadas medidas antropométricas, como circunferência do quadril e altura.

De acordo com essa informação, peça ao usuário o valor do seu quadril e de sua altura.
Fórmula: IAC = (quadril / (altura * sqrt(altura))) - 18
Se o resultado estiver:
entre 0 e 8.9   -> "Magra";
entre 9 e 20.9  -> "Normal";
entre 21 e 25.9 -> "Sobrepeso"
entre 26 e 29.9 -> "Obesidade grau 1"
*/

import {question} from 'readline-sync'

function main() {
    //Entrada
    const quadril = Number(question('Digite o valor do seu quadril: '))
    const altura = Number(question('Digite a sua altura: '))

    //Processamento
    const iac = Math.abs(calcula_iac(quadril, altura)) //Pega o valor absoluto (positivo).
    //const situacao = verifica_indice(iac)

    //Saída
    console.log(`\nSeu Índice de Adiposidade Corporal é de ${iac.toFixed(2)}%`)
    //console.log(`A sua situação quando ao iac é de ${situacao}`)
}

function calcula_iac(quadril, altura) {
    return (quadril / (altura * Math.sqrt(altura))) - 18
}

/*function verifica_indice(iac) {
    if (iac >= 0 && iac <= 8.9){
        return 'magreza!'
    }else if (iac >= 9 && iac <= 20.9){
        return "normalidade!"
    }else if (iac >= 21 && iac <= 25.9) {
        return "sobrepeso!"
    }else {
        return "obesidade grau 1!"
    }
}
*/

main()