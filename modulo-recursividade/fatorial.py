# -*- coding: utf-8 -*-
def main():
    valor = int(input('N: '))

    resultado = fatorial(valor)

    print('\nFatorial:')
    print(resultado)


def fatorial(numero):
    if (numero == 0):
        return 1

    return numero * fatorial(numero - 1)


main()
