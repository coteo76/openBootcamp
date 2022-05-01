# Tema 4 - Contorl de flujo
#     Ejercicio 2

numero_inicio = int(input("Introduzca un numero de inicio: "))
numero_final = int(input("Introduzca un numero final: "))

print("Numeros impares: ")
for x in range(numero_inicio, numero_final):
    if x%2 != 0:
        print(x)


