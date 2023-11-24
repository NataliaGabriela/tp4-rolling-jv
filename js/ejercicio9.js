class Animal{
    #nombre;
    #edadAnimal;
    constructor(nombreParam, edadParam){
        this.nombre = nombreParam;
        this.edadAnimal = edadParam;
    }
    get nombre() {
        return this.#nombre;
      }
      set nombre(nuevoNombre) {
        this.#nombre = nuevoNombre;
      }
      get edadAnimal() {
        return this.#edadAnimal;
      }
      set edadAnimal(nuevoEdadAnimal) {
        this.#edadAnimal = nuevoEdadAnimal;
      }
    mostrarDatosAnimal(){
        document.write(`<h4>Nombre: ${this.nombre}</h4>`);
        document.write(`<h4>Edad: ${this.edadAnimal}</h4>`)
    }
    emitirSonido(){}
}

class Perro extends Animal{
    constructor(nombreParam, edadParam){
        super(nombreParam, edadParam);

    }
    mostrarTipoAnimal(){
        document.write(`<h2>Perro</h2>`);
    }
    emitirSonido(){
        document.write(`<h3>WAUW, WAUW</h3>`)
    }
} 
class Gato extends Animal{
    constructor(nombreParam, edadParam){
        super(nombreParam, edadParam);

    }
    mostrarTipoAnimal(){
        document.write(`<h2>Gato</h2>`);
    }
    emitirSonido(){
        document.write(`<h3>MIAU, MIAU</h3>`)
    }
} 

const perro = new Perro('Teo', 7);
perro.mostrarTipoAnimal();
perro.mostrarDatosAnimal();
perro.emitirSonido();
const gato = new Gato('Cleo', 5);
gato.mostrarDatosAnimal();
gato.emitirSonido();
gato.mostrarTipoAnimal();