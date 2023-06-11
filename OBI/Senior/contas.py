def main():
    dinheiro_disponivel = int(input())
    acougue = int(input())
    farmacia = int(input())
    padaria = int(input())
    
    soma_contas = acougue + farmacia + padaria
    
    qtd_contas_pagas = calcula_contas(dinheiro_disponivel, soma_contas, acougue, farmacia, padaria)
    
    print(qtd_contas_pagas)
    

def calcula_contas(dinheiro, soma_contas, a, f, p):
    
    if soma_contas > dinheiro:
        return 0
    else :
        if soma_contas <= dinheiro: 
            return 3
        elif a + f < dinheiro or a + p < dinheiro or f + p < dinheiro :
            return 2
        elif a < dinheiro or f < dinheiro or p < dinheiro:
            return 1
        
main()    