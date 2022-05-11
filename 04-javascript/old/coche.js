// sesion 7 - ejercicio 1

export class Coche {

    constructor( peso, potencia, marca ) {
        this.peso = peso;
        this.potencia = potencia;
        this.marca = marca;
    }
}

const miCoche = new Coche( 100, 200, 'kia');
console.log(miCoche);

