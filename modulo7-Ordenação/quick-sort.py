import math 
from random import random as aleatorio

def main():
    colecao = [8, 1, 10, 5, 3, 6]
    
    #colecao = ['Mari', 'Ana', 'Pedrinho', 'Rogerio', 'Zenóbia', 'Ana Leticia']
    
    colecao = ['Mari', 'Ana', 'Pedrinhu', 'Rogerio', 'Zenóbian', 'Ana Letíciab']
    
    print(colecao)
    
    ##Coleção de Números:
    #colecao_ordenada = quick_sort(colecao)  #[1, 3, 5, 6, 8, 10] & ['Ana', 'Ana Leticia', 'Mari', 'Pedrinho', 'Rogerio', 'Zenóbia']
    #colecao_ordenada = quick_sort(colecao, reverse=True)  #[10, 8, 6, 5, 3, 1]
    
    
    ##Coleção de Nomes:
    #colecao_ordenada = quick_sort(colecao, chave=len)  #['Ana', 'Mari', 'Zenóbia', 'Rogerio', 'Pedrinho', 'Ana Leticia']
    #colecao_ordenada = quick_sort(colecao, chave=len, reverse=True)  #['Ana Leticia', 'Pedrinho', 'Rogerio', 'Zenóbia', 'Mari', 'Ana'] 
    colecao_ordenada = quick_sort(colecao, chave=ultima_letra)  #['Ana', 'Ana Letíciab', 'Mari', 'Zenóbian', 'Rogerio', 'Pedrinhu']
    
    print(colecao_ordenada) 
    

def ultima_letra(nome):
    return nome[len(nome) - 1]
    
    
def quick_sort(vetor, chave=lambda x:x, reverse=False):
    if len(vetor) <= 1:
        return vetor
    
    random_index = math.floor(aleatorio() * len(vetor))
    pivot = vetor[random_index]
    
    vetor.remove(pivot)
    
    if reverse:
        left = filtro_colecao(vetor, lambda x: chave(x) > chave(pivot))
        rigth = filtro_colecao(vetor, lambda x: chave(x) <= chave(pivot))
    else:
        left = filtro_colecao(vetor, lambda x: chave(x) <= chave(pivot))
        rigth = filtro_colecao(vetor, lambda x: chave(x) > chave(pivot)) 
        
    return quick_sort(left, chave, reverse) + [pivot] + quick_sort(rigth, chave, reverse)
       

def filtro_colecao(colecao, funcao_criterio):
    colecao_filtrada = []
    
    for item in colecao:
        if funcao_criterio(item):
            colecao_filtrada.append(item)
    
    return colecao_filtrada            
    

''' def mapear_colecao(colecao, funcao_mapeadora):
    nova_colecao = []
    
    for item in colecao:
        nova_colecao.append(funcao_mapeadora(item))

    return nova_colecao '''
    
    
main()