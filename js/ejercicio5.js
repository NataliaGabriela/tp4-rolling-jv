class Persona {
    constructor(
      nombreParam,
      edadParam,
      sexoParam,
      pesoParam,
      alturaParam,
      anioNacimientoParam
    ) {
      this.nombre = nombreParam;
      this.edad = edadParam;
      this.dni = this.generaDNI;
      this.sexo = sexoParam;
      this.peso = pesoParam;
      this.altura = alturaParam;
      this.anioNacimiento = anioNacimientoParam;
    }
  
    generaDNI() {
      return (this.dni = Math.floor(Math.random() * 99999999));
    }
    esMayorDeEdad() {
      if (this.edad >= 18) {
        document.write("Es mayor de edad");
      } else {
        document.write("Es menor de edad");
      }
    }
    mostrarGeneracion() {
      switch (true) {
        case this.anioNacimiento >= 1994 && this.anioNacimiento <= 2010:
          document.write(
            `<p>Pertenece a la generacón Z, su rasgo es la Irreverencia</p>`
          );
          break;
        case this.anioNacimiento >= 1981 && this.anioNacimiento <= 1993:
          document.write(
            `<p>Pertenece a la generacón Y millennials, su rasgo es la frustación</p>`
          );
          break;
        case this.anioNacimiento >= 1969 && this.anioNacimiento <= 1980:
          document.write(
            `<p>Pertenece a la generacón X, su rasgo es la obseción por el éxito</p>`
          );
          break;
        case this.anioNacimiento >= 1949 && this.anioNacimiento <= 1968:
          document.write(
            `<p>Pertenece a la generacón Baby Boom, su rasgo es la ambición</p>`
          );
          break;
        case this.anioNacimiento >= 1930 && this.anioNacimiento <= 1948:
          document.write(
            `<p>Pertenece a la generacón Baby Boom, su rasgo es la austeridad</p>`
          );
          break;
        default:
          break;
      }
    }
    mostrarDatos() {
      document.write(`<p>${this.nombre} </p>
      <p>Edad: ${this.edad} </p>
      <p>DNI: ${this.generaDNI()}</p>
      <p>Sexo: ${this.sexo}</p>
      <p>Peso: ${this.peso} kg
      </p>
      <p>Altura: ${this.altura}</p>
      <p>Año de Nacimiento: ${this.anioNacimiento}</p>`);
    }
  }
  
  const persona = new Persona("Natalia", 30, "F", 57, 1.6, 1993);
  persona.mostrarDatos();
  persona.esMayorDeEdad();
  persona.mostrarGeneracion();
  