class Contacto {
    #nombre;
    #telefono;
    constructor(nombreParam, telefonoParam) {
      this.nombre = nombreParam;
      this.telefono = telefonoParam;
    }
    get nombre() {
      return this.#nombre;
    }
    set nombre(nuevoNombre) {
      this.#nombre = nuevoNombre;
    }
    get telefono() {
      return this.#telefono;
    }
    set telefono(nuevoTelefono) {
      this.#telefono = nuevoTelefono;
    }
  }
  
  class Agenda {
    constructor() {
      this.arrayContactos = [];
    }
    aniadirContacto(contacto) {
      if (this.existeContacto(contacto)) {
        document.write("El contacto ya existe<br>");
      } else if (this.agendaLlena()) {
        document.write("Su Agenda astá llena<br>");
      } else {
        this.arrayContactos.push(contacto); 
        document.write(`Se ha añadido el contacto ${this.arrayContactos[this.arrayContactos.length-1].nombre}<br>`);
        console.log(this.arrayContactos);
      }
    }
    existeContacto(contacto) {
      for (let i = 0; i < this.arrayContactos.length; i++) {
        
        if (
          this.arrayContactos[i] != null &&
          this.arrayContactos[i] === contacto
        ) {
          return true;
        }
      }
      return false;
    }
    listarContactos() {
      if (this.huecosLibres() === this.arrayContactos.length) {
        document.write(`No hay contactos que mostrar<br>`);
      } else {
        for (let i = 0; i < this.arrayContactos.length; i++) {
          if (this.arrayContactos[i] != null) {
           
            document.write(`${this.arrayContactos[i].nombre}<br>`);
            document.write(`${this.arrayContactos[i].telefono}<br>`);
          }
        }
      }
    }
    buscarContacto(nombre) {
      let encontrado = false;
      
      for (let i = 0; i < this.arrayContactos.length; i++) {
        
        if (
  
          this.arrayContactos[i].nombre == nombre
        ) {
          document.write(`Contacto: ${this.arrayContactos[i].nombre}, Su telefono es ${this.arrayContactos[i].telefono}<br>`); 
          encontrado = true; 
        }
      }
  
      if (!encontrado) {
        document.write("No se ha encontrado el contacto");
      }
    }
    eliminarContacto(nombre) {
      let encontrado = false;
      for (let i = 0; i < this.arrayContactos.length; i++) {
        if ( this.arrayContactos[i].nombre == nombre) {
          delete this.arrayContactos[i];
          
          encontrado = true; 
        }
      }
  
      if (encontrado) {
        document.write(`Se ha eliminado el contacto ${nombre} <br>`);
      } else {
        document.write(`No se ha eliminado el contacto  ${nombre}<br>`);
      }
    }
    agendaLlena() {
      let estaLlena = true;
      for (let i = 0; i < 10; i++) {
        if (this.arrayContactos[i] == null) {
         
          estaLlena = false; 
        }
      }
  
      return estaLlena; 
    }
    huecosLibres() {
      let contLibres = 0;
      for (let i = 0; i < this.arrayContactos.length; i++) {
        if (this.arrayContactos[i] == 0) {
         
          contLibres++; 
        }
      }
  
      return contLibres;
    }
  }
  let nombre;
  let telefono;
  const agenda = new Agenda();
  let salir = true;
  let i = 0;
  let opcion;
  while (salir) {
    opcion = parseInt(prompt(
      "Elija la opción que corresponda 1- Añadir Contacto 2-Listar Contactos 3- Buscar Contacto 4-Eliminar Contacto 5-Salir"
    ));
    switch (opcion) {
      case 1:
        nombre = prompt("Ingrese un nombre");
        telefono = parseInt(prompt("Ingrese un telefono"));
        const contacto = new Contacto(nombre, telefono);
        agenda.aniadirContacto(contacto);
  
        break;
      case 2:
        agenda.listarContactos();
        break;
      case 3:
        let nombreABuscar = prompt(
          "Ingrese el nombre del contacto que quiere Buscar"
        );
        agenda.buscarContacto(nombreABuscar);
        break;
      case 4:
  
        let nombreAEliminar = prompt(
          "Ingrese el nombre del contacto que quiere Eliminar"
        );
        
  
        agenda.eliminarContacto(nombreAEliminar);
        break;
      case 5:
        salir = false;
        break;
      default:
        document.write("Solo números entre 1 y 8");
     
    }
    i++;
  
  }
  