
import math

peso = float(input("Peso (kg): "))
estatura = float(input("Estatura (m): "))

imc = peso / math.pow(estatura,2)

print("Tu indice de masa corporal es: ", round(imc,2))
