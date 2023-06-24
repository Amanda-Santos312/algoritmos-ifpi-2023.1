def main():
    vetor = [19, 5, 8, 0, -100, -1001]

    mostrar_texto(vetor)

    bubble_sort(vetor)

    mostrar_texto(vetor)
    
def mostrar_texto(vetor):
    print(vetor)

def bubble_sort(colecao, chave=lambda v: v, inverso=False):
    ciclos = len(colecao) - 1

    for i in range(ciclos):
        trocou = False

        for j in range(ciclos):
            atual = colecao[j]
            proximo = colecao[j+1]

            if not inverso:
                if chave(atual) > chave(proximo):
                    colecao[j] = proximo
                    colecao[j+1] = atual
                    trocou = True
            else:
                if chave(atual) < chave(proximo):
                    colecao[j] = proximo
                    colecao[j+1] = atual
                    trocou = True

        if not trocou:
            return colecao
main()