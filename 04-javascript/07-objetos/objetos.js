// Crea un archivo llamado objetos.js que contenga las siguientes líneas
// - Un objeto con tus datos personales (nombre, apellido, edad, altura, eresDesarrollador)
var persona = { nombre: "Carlos", apellido: "Oteo", edad: 45, altura: 170, eresDesarrollador: true };
console.log(persona);

// - Una variable que obtenga tu edad a partir del objeto anterior
var miEdad = persona.edad;
console.log(miEdad);

// - Una lista que contenga el objeto con tus datos personales y un nuevo objeto con los datos personales de tus dos mejores amig@s
var listaPersonas = [ persona, 
    { nombre: "Luis", apellido: "Perez", edad: 43, altura: 168, eresDesarrollador: false },
    { nombre: "Moises", apellido: "Cruz", edad: 46, altura: 172, eresDesarrollador: true } ]
console.log(listaPersonas);

// - Una nueva lista con los objetos de la lista anterior ordenados por edad, de mayor a menor
var listaOrdenada = listaPersonas.sort( (a,b) =>  b.edad - a.edad );
console.log(listaOrdenada);

