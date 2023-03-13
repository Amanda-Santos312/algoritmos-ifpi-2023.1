/* Dada a distância da prova (em metros) e a velocidade média do atleta (em km/h), calcule o tempo da prova em minutos.
Para resolver esse exercício, você pode utilizar a fórmula:
tempo = (distância / (velocidade * 1000)) * 60
Aqui, a distância está em metros e a velocidade está em km/h, então é necessário converter a velocidade para metros por minuto, multiplicando por 1000 e dividindo por 60.
Para obter o resultado final em minutos, é necessário multiplicar o resultado da fórmula por 60.
*/

import {question} from 'readline-sync'

function main() {
    //Entrada
    const distancia = Number(question('Distância da prova(m): '))
    const velocidade_media = Number(question('Velocidade média do atleta(km/h): '))

    //Processamento
    const nova_velocidade = converte_velocidade(velocidade_media)
    const tempo = Math.floor(calcula_tempo_prova(distancia, nova_velocidade))
    

    //Saída
    console.log(`O tempo de prova foi de ${tempo.toFixed(1)} minutos`)

}

function converte_velocidade(velocidade_media) {
    return ((velocidade_media * 1000) / 60) * 60
}

function calcula_tempo_prova(distancia, nova_velocidade) {
    return (distancia / (nova_velocidade * 1000)) * 60
}

main()