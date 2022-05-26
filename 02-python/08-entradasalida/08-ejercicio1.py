# Tema 8 - Entrada y Salida
#     Ejercicio 1

# Crear archivo.txt con permisos de escritura
f = open('archivo.txt', 'w')

# Escritir texto dentro del archivo
datos = 'Texto dentro del archivo.'
f.write(datos)

# Cerrar archivo
f.close()


