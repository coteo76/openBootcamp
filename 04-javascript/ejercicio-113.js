// sesion 11 - ejercicio 3

class Figura {
    constructor( color = "Blanco" ) {
      this._color = color;
    }
  
    getColor() {
      return this._color;
    }
  
    setColor( color ) {
      this._color = color;
    }

    getArea() {
        return -1;
    }
  }

// clase Circulo hereda de Figura
class Circulo extends Figura {
    // propiedad _radio publica
    _radio = 0;
    constructor(radio,color) {
      	super(color);
        this._radio = radio;
        
    }

    getArea() {
        return 2*3.14*this._radio;
    }
}

// clase Rectangulo hereda de Figura
class Rectangulo extends Figura {
    // propiedades publicas
    _base = 0;
    _altura = 0;
    constructor(base,altura,color) {
      	super(color);
        this._base = base;
        this._altura = altura;
    }

    getArea() {
        return this._base * this._altura;
    }
}