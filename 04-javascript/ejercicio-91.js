// sesion 9 - ejercicio 1

function sumar( a, b ) {
    if( typeof a != 'number' || typeof b != 'number' ) {
        return "Los parámetros deben ser números."
    }
    return a + b;
}

console.log(sumar(4,6)); // ok
console.log(sumar(3,'a')); // error
console.log(sumar(true,5)); // error
