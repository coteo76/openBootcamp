// Crea un archivo llamado fechas.js que contenga las siguientes líneas
// - La fecha de hoy
var fechaHoy = new Date();
console.log(fechaHoy);

// - La fecha de tu nacimiento
var fechaNacimiento = new Date("august 26, 1976");
console.log(fechaNacimiento);

// - Un variable que indique si hoy es más tarde (>) que la fecha de tu nacimiento
var masTarde = fechaHoy > fechaNacimiento;
console.log(masTarde);

// - Una variable que contenga el día de tu nacimiento
var dia = fechaNacimiento.getDay();
var dias = [ "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo" ];
console.log(dias[dia]);

// - Una variable que contenga el mes de tu nacimiento (recuerda que Enero es mes 0)
var mes = fechaNacimiento.getMonth();
var meses = [ "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre" ];
console.log(meses[mes]);

// - Una variable que contenga el año de tu nacimiento (con 4 dígitos)
var anyo = fechaNacimiento.getFullYear();
console.log(anyo);


