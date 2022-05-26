# Tema 8 - Entrada y Salida
#     Ejercicio 2

# Importar modulo pickle
import pickle

# Crear archivo objeto.bin
f = open('objeto.bin', 'wb')

# Crear objeto Vehiculo
class Vehiculo():
    _color = None
    _ruedas = None
    _puertas = None

    def __init__(self, color, ruedas, puertas):
        self._color = color
        self._ruedas = ruedas
        self._puertas = puertas
    
    def getVehiculo(self):
        return f'Mi vehiculo es: {self._color}, tiene {self._ruedas} ruedas yj {self._puertas} puertas.'


objeto = Vehiculo('rojo', 4, 5)

pickle.dump(objeto,f)

# Cerrar archivo
f.close()

# Abrir archivo y leer objeto
f = open('objeto.bin', 'rb')
objetoLeido = pickle.load(f)
f.close()

print(objetoLeido.getVehiculo())

