# Tema 9 - Biblioteca estandar
#     Ejercicio 1

def main():
    # Pedir lista de paises, separados por comas
    paises = input("Introduzca una lista de paises separados por comas: ")

    # Convertir la lista de paises en un conjunto para eliminar duplicados
    setPaises = set(list(paises.split(",")))

    # Ordena el conjunto de paises
    ordenPaises = sorted(setPaises)

    paises = ""
    for pais in ordenPaises:
        paises += pais + ", "

    # Muestra los paises separados por comas
    print("Lista ordenada de paises:", paises)

if __name__ == '__main__':
    main()
