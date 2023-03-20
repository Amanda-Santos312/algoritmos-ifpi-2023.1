/* Leia 3 (três) números (cada número corresponde a um ângulo interno do triângulo), verifique e escreva 
se os 3 (três) números formam um triângulo (a soma dos ângulos internos é igual a 180º). 
Caso verdadeiro, verifique se formam um triângulo acutângulo (3 ângulos < 90º), retângulo (1 ângulo = 90º) ou 
obtusângulo (1 ângulo > 90º). Não existe ângulo com tamanho 0º (zero grau) */
import {question} from 'readline-sync'

function main() {
    const angulo1 = Number(question('Numero1: '))
    const angulo2 = Number(question('Numero2: '))
    const angulo3 = Number(question('Numero3: '))

    const triangulo = eh_triangulo(angulo1, angulo2, angulo3)
    const tipo = verifica_tipo(angulo1, angulo2, angulo3)

    console.log(`\n${triangulo}`)
    console.log(`Tipo: ${tipo}`)
}

function eh_triangulo(angulo1, angulo2, angulo3) {
    if (angulo1 + angulo2 + angulo3 > 180 || angulo1 == 0 || angulo2 == 0 || angulo3 == 0){
        return 'Não é triângulo!'
    } else {
        return 'É triângulo!'
    }
}

function verifica_tipo(angulo1, angulo2, angulo3) {
    if (eh_triangulo = true && angulo1 < 90 && angulo2 < 90 && angulo3 < 90){
        return 'Acutângulo'
    } else if (eh_triangulo = true && angulo1 == 90 || angulo2 == 90 || angulo3 == 90) {
        return 'Retângulo'
    } else if (eh_triangulo = true && angulo1 > 90 || angulo2 > 90 || angulo3 > 90){
        return 'Obtusângulo'
    } else {
        return 'Null'
    }
}

main()