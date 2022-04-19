//sesion 10 - ejercicio 1

//importa moment.js
import * as moment from 'moment';

// funcion saludar con parámetro
function saludar(nombre) {
    console.log( "Hola, " + nombre );
}

// funcion horaJS - devuelve hora actual usando JS
function horaJS() {
    let fecha = new Date();
  	let hora = fecha.getHours();
  	let minutos = fecha.getMinutes();
  	let segundos = fecha.getSeconds();
  	hora = hora > 9 ? hora : "0"+hora;
  	minutos = minutos > 9 ? minutos : "0"+minutos;
  	segundos = segundos > 9 ? segundos : "0"+segundos;
    return hora+":"+minutos+":"+segundos;
}

// funcion hora - devuelve hora actual usando moment
function hora() {
    let fecha = moment();
    return fecha.format('HH:mm:ss');
}

// exporta las funciones
export { saludar, horaJS, hora };