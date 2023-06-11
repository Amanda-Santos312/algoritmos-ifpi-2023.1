def main():
    paes = int(input())
    doces = int(input())
    bolos = int(input())
    
    pontos = calcula_pontos(paes, doces, bolos)
    
    premio = verifica_premio(pontos)
    
    print(premio)
    
    
def calcula_pontos(p, d, b):
    return (p * 1) + (d * 2) + (b * 3)


def verifica_premio(pontos):
    if pontos >= 150:
        return 'B'
    elif pontos >= 120:
        return 'D'
    elif pontos >= 100:
        return 'P'
    else:
        return 'N'
    
    
main()    
    