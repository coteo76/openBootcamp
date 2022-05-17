// Crea un archivo JS que contenga las siguientes líneas

// - Una función sin parámetros que devuelva siempre "true"
function funcionVacia() {
    return true;
}
funcionVacia();

// - Una función asíncrona que utilice un setTimeout y pase por consola un "Hola soy una promesa" 5 segundos después de haberse ejecutado
const funcionAsincrona = new Promise(function(resolve, reject) {
    setTimeout(function() { resolve("Hola, soy una promesa.") }, 3000 );
});

funcionAsincrona.then(function(value) {
    console.log(value);
});

// - Una función generadora de índices pares automáticos
function* generaIndicaPar() {
    let index = 0;
    while (true) {
        index+=2;
        yield index;
    }
}

const gen = generaIndicaPar()
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);


