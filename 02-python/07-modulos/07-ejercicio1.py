# Tema 7 - Modulos
#     Ejercicio 1

# importa modulo operadores
import operadores as op

def main():
    a = 10
    b = 5

    print("Operaciones con: a=",a," y b=", b)

    print("Suma: ", op.suma(a,b))
    print("Resta: ", op.resta(a,b))
    print("Multiplica: ", op.multiplica(a,b))
    print("Divide: ", op.divide(a,b))

if __name__ == '__main__':
    main()


