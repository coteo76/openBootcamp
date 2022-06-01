# Tema 10 - GUI
#     Ejercicio 2

import tkinter as tk
from tkinter import ttk

def main():

    window = tk.Tk()

    var1 = tk.IntVar()
    var2 = tk.IntVar()
    var3 = tk.IntVar()
    var4 = tk.IntVar()
    var5 = tk.IntVar()
    
    label1 = tk.Label(window, text='Lenguajes: ').pack(anchor='w')

    chk1 = tk.Checkbutton(window, text='Python', variable=var1, onvalue=1, offvalue=0).pack(anchor='w')
    chk2 = tk.Checkbutton(window, text='JavaScript', variable=var2, onvalue=1, offvalue=0).pack(anchor='w')
    chk3 = tk.Checkbutton(window, text='Java', variable=var3, onvalue=1, offvalue=0).pack(anchor='w')
    chk4 = tk.Checkbutton(window, text='Spring', variable=var4, onvalue=1, offvalue=0).pack(anchor='w')
    chk5 = tk.Checkbutton(window, text='C++', variable=var5, onvalue=1, offvalue=0).pack(anchor='w')

    window.mainloop()

if __name__ == '__main__':
    main()
