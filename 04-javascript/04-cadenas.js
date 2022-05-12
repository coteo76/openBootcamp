var nombre = "Carlos";
var apellido = "Oteo";

var estudiante = `${nombre} ${apellido}`;
var estudianteMayus = estudiante.toUpperCase();
var estudianteMinus = estudiante.toLowerCase();
var numeroLetras = estudiante.length;
var primer = nombre[0];
var ultima = apellido[apellido.length-1];
var sinEspacios = estudiante.replace(/\s/g,'');
var hasNombre = estudiante.includes(nombre);

console.log(estudiante);
console.log(estudianteMayus);
console.log(estudianteMinus);
console.log(numeroLetras);
console.log(primer);
console.log(ultima);
console.log(sinEspacios);
console.log(hasNombre);
