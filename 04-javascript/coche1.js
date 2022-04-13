// sesion 7 - ejercicio 2

export class Coche {

    _peso = new Number;
    _potencia = new Number;
    _marca = new String;

    constructor( peso, potencia, marca ) {
        this._peso = peso;
        this._potencia = potencia;
        this._marca = marca;
    }

    set peso(p) {
        this._peso = p;
    }

    set potencia(p) {
        this._potencia = p;
    }

    set marca(m) {
        this._marca = m;
    }

    get peso() { return this._peso; }

    get potencia() { return this._potencia; }

    get marca() { return this._marca; }
}

const miCoche = new Coche( 100, 200, 'kia');

console.log( miCoche.peso, miCoche.potencia, miCoche.marca );

miCoche.peso = 150;
miCoche.potencia = 250;
miCoche.marca = 'opel';

console.log( miCoche.peso, miCoche.potencia, miCoche.marca );


