function main(){
    //const colecao = [8, 1, 10, 5, 3, 6]

    const colecao = ['Mari', 'Ana', 'Pedrinho','Rogerio', 'Zenóbia', 'Ana Letícia']
    //const colecao = ['Mari', 'Ana', 'Pedrinhu', 'Rogerio', 'Zenóbian', 'Ana Letíciab']

    console.log(colecao)

    // Coleção de Números
    //const colecao_ordenada = quicksort(colecao)
    // const colecao_ordenada = quicksort(colecao, {reverse: true})


    // Colecao de Nomes
    //const colecao_ordenada = quicksort(colecao, {chave: len}) //Ordem de menor a maior nomes
    //const colecao_ordenada = quicksort(colecao, {chave: len, reverse: true}) //Ordem do último nome ao primeiro
    const colecao_ordenada = quicksort(colecao, {chave: ultima_letra}) //Ordena pela ultima letra de cada nome 

    console.log(colecao_ordenada)
}

function len(vetor){
    return vetor.length
}

function ultima_letra(nome){
    return nome[nome.length - 1]
}

export function quicksort(vetor, {chave = x => x, reverse = false} = {}){

    if (vetor.length <= 1)
        return vetor

    const random_index = Math.floor(Math.random() * vetor.length)
    const pivot = vetor[random_index]
    // sorry: using method (implemente remover_item_colecao(colecao, item))
    vetor.splice(random_index, 1)

    let left, right

    if (reverse){
        left = filtro_colecao(vetor,  x => chave(x) > chave(pivot))
        right = filtro_colecao(vetor, x => chave(x) <= chave(pivot))
    }else{
        left = filtro_colecao(vetor,  x => chave(x) <= chave(pivot))
        right = filtro_colecao(vetor, x => chave(x) > chave(pivot))
    }

    return quicksort(left, {chave, reverse}).concat([pivot]).concat(quicksort(right, {chave, reverse}))
}

// local: utils
function filtro_colecao(colecao, funcao_criterio){
    const colecao_filtrada = []

    for (const item of colecao){
        if (funcao_criterio(item)){
            colecao_filtrada.push(item)
        }
    }

    return colecao_filtrada
}


main()