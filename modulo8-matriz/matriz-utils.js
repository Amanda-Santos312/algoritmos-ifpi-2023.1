import {obter_numero} from '../input-utils.js'
import { novo_vetor, show_vetor } from '../modulo6-Vetores/vetor-utils.js'

export function nova_matriz() {
    const matriz = novo_vetor(qtd_linhas)
    
    for (let i = 0; i < qtd_linhas; i++) {
        matriz[i] = novo_vetor(qtd_colunas, qtd_linhas)
    }
    return matriz
}


export function show_matriz(matriz) {
    for (let linha of matriz)
        show_vetor(linha)
}


export function preencher_matriz_manual(matriz1) {
    const qtd_linhas = matriz1.length

    for (let i = 0; i < qtd_linhas; i++) {
        for (let j = 0; j < matriz1[i].length; j++) {
            matriz1[i][j] = obter_numero(`[${i}][${j}]`)
        }
    }
}


export function somar_matrizes() {
    const qtd_linhas = matriz1.length
    const qtd_colunas = matriz1[0].length

    const matriz_soma = nova_matriz(qtd_linhas, qtd_colunas, 0)

    for (let i = 0; i < qtd_linhas; i++) {
        for (let j = 0; j < qtd_colunas; j++) {
            matriz_soma[i][j] = matriz1[i][j] + matriz2[i][j]
        }
    }
    return matriz_soma
}