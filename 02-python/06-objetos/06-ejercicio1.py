# Tema 6 - Objetos
#     Ejercicio 1

# clase vehiculo
# constructor con los parametros color, ruedas y puertas

class Vehiculo():
    _color = None
    _ruedas = None
    _puertas = None

    def __init__(self, color, ruedas, puertas):
        self._color = color
        self._ruedas = ruedas
        self._puertas = puertas

# clase coche - hereda de vehiculo
# constructor con los parametros velocidad y cilindrada de coche
#   y con los parametros de vehiculo color y puertas, las ruedas en un coche seguramente sean 4 por defecto

class Coche(Vehiculo):
    _velocidad = None
    _cilindrada = None

    def __init__(self, color, puertas, velocidad, cilindrada):
        super().__init__(color, 4, puertas)
        self._velocidad = velocidad
        self._cilindrada = cilindrada

    def muestraCoche(self):
        print("----------")
        print("Datos del coche:")
        print("Es un vehiculo de color ", self._color, " con ", self._ruedas, " ruedas y con ", self._puertas, " puertas." )
        print("Tiene de cilindrada ", self._cilindrada, " y una velocidad maxima de ", self._velocidad, " Km/h.")
        print("----------")


# creacion de objeto y mostrarlo por pantalla

miCoche = Coche( "rojo", 5, 180, 1600 )
miCoche.muestraCoche()


