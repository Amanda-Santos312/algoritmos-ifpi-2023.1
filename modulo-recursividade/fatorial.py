
def main():
    valor = int(input('N: '))
    
    resultado = fatorial(valor)
    
    print(f'{valor} fatorial eh igual a {resultado}')
    
    
def fatorial(numero):
    if (numero == 0):
        return 1
    return numero * fatorial(numero  - 1)