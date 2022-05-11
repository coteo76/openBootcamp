// sesion 8 - ejercicio 3

const arrayVacio = () => console.error('El array está vacio.');
const noArray = () => console.error('No es un array.');

function eliminarUltimo( arr, vacio, noarray ) {
    if (Array.isArray(arr)) {
        arr.length > 0 ? arr.pop() : vacio();
    } else {
        noarray();
    }
}

// Test con valor no array
const num = 1;
eliminarUltimo(num, arrayVacio, noArray);

// Test con array vacio
const listaVacia = [];
eliminarUltimo(listaVacia, arrayVacio, noArray);

// Test con array con valores
const listaNombres = [ 'Antonio', 'Carlos', 'Pepe', 'Paco' ];
eliminarUltimo(listaNombres, arrayVacio, noArray);
console.log(listaNombres);
