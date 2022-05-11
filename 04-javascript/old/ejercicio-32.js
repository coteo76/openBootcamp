// ejercicio 3.2

let iteracion = 1;
let textoPrimo;

while (iteracion <= 10) {
    textoPrimo = "";
    switch (iteracion) {
        case 2:
        case 3:
        case 5:
        case 7:
            textoPrimo = " - Numero primo";
            break;
    }
    console.log("Iteración: " + iteracion + textoPrimo);
    iteracion++;
}