# Tema 9 - Biblioteca estandar
#     Ejercicio 2

from functools import reduce

def sumaImpares(lista):
    listaImpares = filter(lambda x: x%2, lista)
    sumaImpares = reduce(lambda x,y: x+y, listaImpares)
    return sumaImpares

def main():
    # Toma una lista de numeros introducida por el usuario
    inputNumeros = input("Introduzca una lista de numeros separados por comas: ").split(",")

    # Convierta la lista de entrada en una lista numerica
    listaNumeros = map( lambda x: int(x), inputNumeros )

    # Muestra la suma de los numeros impares
    print("Suma de numeros impares: ", sumaImpares(listaNumeros))

if __name__ == '__main__':
    main()
