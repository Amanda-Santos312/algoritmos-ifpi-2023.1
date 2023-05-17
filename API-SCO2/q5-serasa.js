import { mostrar_texto, obter_numero_positivo } from "./input-utils.js"

function main() {
    mostrar_texto('\n------> SCORE SERASA 1.0 <------')
    const score1_a = obter_numero_positivo('Valor para a de 0 a 100:')
    const score1_b = obter_numero_positivo('Valor para b de 0 a 100:')
    const score1_c = obter_numero_positivo('Valor para c de 0 a 100:')
    const score1 = verifica_score(score1_a, score1_b, score1_c)

    mostrar_texto('\n------> SCORE SERASA 2.0 <------')
    const score2_a = obter_numero_positivo('Valor para a de 0 a 100:')
    const score2_b = obter_numero_positivo('Valor para b de 0 a 100:')
    const score2_c = obter_numero_positivo('Valor para c de 0 a 100:')
    const score2 = verifica_score(score2_a, score2_b, score2_c)
    
    mostrar_texto(`\nScore1: ${score1}
    Score2: ${score2}`)
    
    
}

function verifica_score(score1, score2) {
    const a_1 = 260
    const b_1 = 570
    const c_1 = 170

    const a_2 = 620
    const b_2 = 190
    const c_2 = 190
}

main()