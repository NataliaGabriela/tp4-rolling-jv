class Persona{
    #nombre;
    #edadPersona;
    constructor(nombreParam, edadParam, profesionParam){
        this.nombre = nombreParam;
        this.edadPersona = edadParam;
        this.profesion = profesionParam;
    }
    get nombre() {
        return this.#nombre;
      }
      set nombre(nuevoNombre) {
        this.#nombre = nuevoNombre;
      }
      get edadPersona() {
        return this.#edadPersona;
      }
      set edadPersona(nuevoEdadPersona) {
        this.#edadPersona = nuevoEdadPersona;
      }
    saludar(){
        document.write(`<h4>Hola</h4>`)
    }
    mostrarDatos(){
        document.write(`<p>Nombre: ${this.nombre}</p>`)
        document.write(`<p>Edad: ${this.edadPersona}</p>`)
        document.write(`<p>Profesión: ${this.profesion}</p>`)
    }
    despedirse(){
        document.write(`<h4>Adiós</h4>`)
    }
}

const personaUno = new Persona('Maria',30,'doctora');
const personaDos = new Persona('Andrés',35,'abogado');


personaUno.saludar();
personaUno.mostrarDatos();
personaUno.despedirse();

personaDos.saludar();
personaDos.mostrarDatos();
personaDos.despedirse();