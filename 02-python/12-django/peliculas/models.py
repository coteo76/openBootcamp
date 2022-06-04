from django.db import models

class Genero(models.Model):
    nombre = models.CharField(max_length=64, help_text="Nombre del genero")

    def __str__(self):
        return self.nombre

class Director(models.Model):
    nombre = models.CharField(max_length=64, help_text="Nombre del director")
    apellido = models.CharField(max_length=64, help_text="Apellido del director")
    nacimiento = models.PositiveIntegerField(help_text="Año de nacimiento")
    biografia = models.TextField(help_text="Biografia del director")

    def __str__(self):
        return self.nombre + " " + self.apellido

class Pelicula(models.Model):
    titulo = models.CharField(max_length=64, help_text="Titulo de la pelicula")
    director = models.ForeignKey('Director', on_delete=models.CASCADE, help_text="Director de la pelicula")
    descripcion = models.TextField(max_length=256, help_text="Descripción de la pelicula")
    genero = models.ManyToManyField(Genero, help_text="Genero de la pelicula")
    duracion = models.PositiveIntegerField(help_text="Duración de la pelicula")
    estreno = models.PositiveIntegerField(help_text="Año de estreno")

    def __str__(self):
        return self.titulo
