// sesion 9 - ejercicio 2

function sumar( a, b ) {
    try {
        if( typeof a != 'number' || typeof b != 'number') throw " no son números.";
    }

    catch(err) {
        return "Error: los parámetros " + err;
    }

    return a+b;
}

console.log(sumar(4,6)); // ok
console.log(sumar(3,'a')); // error
console.log(sumar(true,5)); // error
 