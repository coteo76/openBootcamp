# Tema 6 - Objetos
#     Ejercicio 2

class Alumno():
    _nombre = None
    _nota = None

    def __init__( self, nombre ):
        self._nombre = nombre

    def ponNota(self, nota):
        self._nota = nota

    def verNota(self):
        return self._nota

    def verNombre(self):
        return self._nombre

    def esAprobado(self):
        if self._nota == None:
            print("Ups... el alumno ", self.verNombre(), " aun no tiene una nota asignada." )
        elif self._nota >= 5:
            print("Genial. El alumno ", self.verNombre(), " está aprobado con un ", self.verNota() )
        else:
            print("Oh oh... el alumno ", self.verNombre(), " ha suspendido con un ", self.verNota() )


alumno1 = Alumno("Pepe")
print("El alumno ", alumno1.verNombre(), " tiene una nota de: ", alumno1.verNota())
alumno1.esAprobado()

alumno1.ponNota(6)
alumno1.esAprobado()

alumno1 = Alumno("Juan")
alumno1.ponNota(3.5)
alumno1.esAprobado()

