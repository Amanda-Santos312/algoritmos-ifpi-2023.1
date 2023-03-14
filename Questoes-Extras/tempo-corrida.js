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
    const tempo = calcula_tempo_prova(distancia, velocidade_media)

    //Saída
    console.log(`O tempo de prova foi de ${tempo.toFixed(1)} minutos`)

}

function calcula_tempo_prova(distancia, velocidade_media) {
    return (distancia / (velocidade_media * 1000)) * 60 //para chegar nos metros e depois multiplica por 60 min
}
main()