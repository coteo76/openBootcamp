# Tema 7 - Modulos
#     Ejercicio 2

# importa modulo time
import time

# hora actual
hora_actual = time.time()
t_actual = time.localtime(hora_actual)

# las 7:00, hora de salir
t = (t_actual.tm_year, t_actual.tm_mon, t_actual.tm_mday, 7, 0, 0, t_actual.tm_wday, t_actual.tm_yday, t_actual.tm_isdst)
hora_salida = time.mktime(t)
t_salida = time.localtime(hora_salida)

if (hora_actual > hora_salida):
    print("Son mas de las 7. Hora de is a casa.")
else:
    queda_trabajo = hora_salida - hora_actual
    horas_trabajo = int(queda_trabajo/3600)
    queda_trabajo -= horas_trabajo*3600
    minutos_trabajo = int(queda_trabajo/60)
    print("Te quedan ", horas_trabajo, " horas y ", minutos_trabajo, " minutos para salir.")
