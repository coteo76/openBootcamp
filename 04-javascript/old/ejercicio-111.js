// sesion 11 - ejercicio 1

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
  }
  
  const fig = new Figura();
  fig.setColor("Azul");
  console.log(fig.getColor());