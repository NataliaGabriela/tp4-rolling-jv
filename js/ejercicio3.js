class Rectangulos {
    #alto;
    #ancho;
  constructor(altoParam, anchoParam) {
    this.alto = altoParam;
    this.ancho = anchoParam;
  }
  get alto() {
    return this.#alto;
  }
  get ancho() {
    return this.#ancho;
  }
  set alto(nuevoAlto) {
    this.#alto = nuevoAlto;
  }
  set ancho(nuevoAncho) {
    this.#ancho = nuevoAncho;
  }
  mostrarDatos() {
    document.write(`Alto: ${this.alto} <br> Ancho: ${this.ancho}<br>`);
  }
  perimetroRectangulo() {
    const perimetro = 2 * (this.alto + this.ancho);
    document.write(`Perimetro: ${perimetro} <br>`);
  }
  areaRectangulo() {
    const area = this.alto * this.ancho;
    document.write(`Área: ${area} <br>`);
  }
}

const rectangulo = new Rectangulos(20, 15);
rectangulo.mostrarDatos();
console.log(rectangulo);
rectangulo.perimetroRectangulo();
rectangulo.areaRectangulo();
document.write(`<h3>Al modificar los datos: </h3>`);
rectangulo.alto = 25;
rectangulo.ancho= 20;
rectangulo.mostrarDatos();
rectangulo.perimetroRectangulo();
rectangulo.areaRectangulo();
