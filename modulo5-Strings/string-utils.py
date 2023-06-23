def main():
    frase = input('')
    
    mostar_caracteres(frase)
    mostar_index_caracteres(frase)
    mostar_caracteres_pares(frase)
    mostar_caracteres_impares(frase)
    frase_up = uppercase_frase(frase)
    print(frase_up)
    frase_lower = lowercase_frase(frase)
    print(frase_lower)
    

def mostar_caracteres(frase):
    
    for caractere in frase:
        print(caractere)
    

def mostar_index_caracteres(frase):
    index = 0
    tamanho = len(frase)
    
    while index < tamanho:
        caractere = frase[index]
        print(f'{index} -- {caractere}')
        
        index += 1 #sempre o resultado mais + 1 para poder percorrer e parar

 
def mostar_caracteres_pares(frase):
    for i in range(len(frase)):
        if eh_par(i):
            print(f'{i} -- {frase[i]}')
            

def eh_par(numero: int):
    return numero % 2 == 0              
    

def mostar_caracteres_impares(frase):
    for i in range(len(frase)):  #for i in range é o for of de javascript
        if eh_impar(i):
            print(f'{i} -- {frase[i]}') 
            

def eh_impar(numero: int):
    return numero % 2 == 1                 
          
          
def uppercase_frase(frase):
    frase_up = ''
    for caractere in frase:
        frase_up += uppercase_caractere(caractere)
    return frase_up    
  

def uppercase_caractere(caractere):
    if not eh_letra(caractere) or eh_letra_maiuscula(caractere):
        return caractere  #Irá retornar o mesmo caracter no caso de não ser letra ou letra minuscula
  
    codigo = ord(caractere)
    novo_codigo = codigo - 32
    novo_caractere = chr(novo_codigo)
    return novo_caractere


def lowercase_frase(frase):
    frase_lol = ''
    for caractere in frase:
        frase_lol += lowercase_caracter(caractere)

    return frase_lol


def lowercase_caracter(caractere):
    if not eh_letra(caractere) or eh_letra_minuscula(caractere):
        return caractere

    codigo = ord(caractere)
    novo_codigo = codigo + 32
    novo_caractere = chr(novo_codigo)
    return novo_caractere


def eh_letra(caractere):
    return eh_letra_maiuscula(caractere) or eh_letra_minuscula(caractere)
    
    
def eh_letra_maiuscula(caractere):
    codigo = ord(caractere)
    return codigo >= 65 and codigo <= 90
    
    
def eh_letra_minuscula(caractere):
    codigo = ord(caractere)
    return codigo >= 97 and codigo <= 122
          
main()