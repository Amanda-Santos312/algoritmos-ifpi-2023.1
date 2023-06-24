import {mostrar_texto} from '../input-utils.js'

function main() {
    const vetor = [19, 5, 8, 0, -100, -1001]

    mostrar_texto(vetor)

    bubble_sort(vetor)
    
    mostrar_texto(vetor)


    function bubble_sort(colecao, chave=v=>v, inverso=false) {
        const ciclos = colecao.length - 1 //tamanho menos 1

        for (let i = 0; i < ciclos; i++) {
            let trocou = false

            for (let j = 0; j < ciclos; j++) {
                let atual = colecao[j]
                let proximo = colecao[j+1]

                if (!inverso) {
                    if (chave(atual) > chave(proximo)) {
                        colecao[j] = proximo
                        colecao[j+1] = atual
                        trocou = true
                    }
                } else {
                    if (chave(atual) < chave(proximo)) {
                        colecao[j] = proximo
                        colecao[j+1] = atual
                        trocou = true
                    }
                }
            }

            if (!trocou) { //
                return //retornará o vetor
            }

        }
    }
}
main()