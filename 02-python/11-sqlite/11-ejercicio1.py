# Tema 11 - Bases de Datos SQLite
#     Ejercicio 1

import sqlite3

def crea_alumno(id, nombre, apellido):
    conn = sqlite3.connect('alumnos.db')
    cursor = conn.cursor()

    query = '''INSERT INTO alumnos(id, nombre, apellido) VALUES (?, ?, ?)'''
    rows = cursor.execute( query, (id, nombre, apellido))

    conn.commit()
    cursor.close()
    conn.close()

def elimina_alumno(id):
    conn = sqlite3.connect('alumnos.db')
    cursor = conn.cursor()

    query = f'DELETE FROM alumnos WHERE id={id}'
    rows = cursor.execute(query)

    conn.commit()
    cursor.close()
    conn.close()

    print("Alumno: ", id, " eliminado.")

def busca_alumno(nombre):
    conn = sqlite3.connect('alumnos.db')
    cursor = conn.cursor()

    query = f'SELECT * FROM alumnos WHERE nombre="{nombre}"'
    rows = cursor.execute(query)
    data = rows.fetchone()

    cursor.close()
    conn.close()

    if data == None:
        print("No se han encontrado al alumno: ", nombre)
    else:
        print("Alumno encontrado: ", data)

def consulta_alumnos():
    conn = sqlite3.connect('alumnos.db')
    cursor = conn.cursor()  
    
    query = f'SELECT * FROM alumnos'
    rows = cursor.execute(query)

    print("Contenido de la Base de Datos:")
    for row in rows:
        print(row)

    cursor.close()
    conn.close()  

def main():

    # Creando alumnos
    crea_alumno(1,'Pepe', 'Perez')
    crea_alumno(2,'Paco', 'Martin')
    crea_alumno(3,'Jose', 'Gonzalez')
    crea_alumno(4,'Antonio', 'Perez')
    crea_alumno(5,'Eustaquio', 'Martinez')
    crea_alumno(6,'Gonzalo', 'Gonzalez')
    crea_alumno(7,'Pepe', 'Martin')
    crea_alumno(8,'Jose', 'Martinez')

    # Consulta de alumnos
    consulta_alumnos()

    # Busqueda de alumno por nombre
    busca_alumno('Pepe')

    # Elimina alumno por id
    elimina_alumno(8)

    # Consulta de alumnos
    consulta_alumnos()


if __name__ == '__main__':
    main()