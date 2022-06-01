# Tema 10 - GUI
#     Ejercicio 1

import tkinter as tk

def main():

    def reset():
        radioValue.set(None)

    window = tk.Tk()

    radioValue = tk.IntVar()
    radioValue.set(None)
    radio1 = tk.Radiobutton(window, text='Opcion 1', value='Opcion 1', variable=radioValue).pack()
    radio2 = tk.Radiobutton(window, text='Opcion 2', value='Opcion 2', variable=radioValue).pack()
    radio3 = tk.Radiobutton(window, text='Opcion 3', value='Opcion 3', variable=radioValue).pack()
    radio4 = tk.Radiobutton(window, text='Opcion 4', value='Opcion 4', variable=radioValue).pack()
    radio5 = tk.Radiobutton(window, text='Opcion 5', value='Opcion 5', variable=radioValue).pack()

    label1 = tk.Label(window, text="Opción escogida: ", fg="blue").pack()
    labelValue = tk.Label(window, textvariable=radioValue, fg="blue").pack()

    button = tk.Button(window, text="Reset", command=reset).pack()

    window.mainloop()

if __name__ == '__main__':
    main()


