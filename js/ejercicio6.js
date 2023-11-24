class Libro {
    #ISBN;
    #titulo;
    #autor;
    #nPaginas;
    constructor(ISBNParam, tituloParam, autorParam, nPaginasParam) {
      this.ISBN = ISBNParam;
      this.titulo = tituloParam;
      this.autor = autorParam;
      this.nPaginas = nPaginasParam;
    }
    get ISBN() {
      return this.#ISBN;
    }
    get titulo() {
      return this.#titulo;
    }
    get autor() {
      return this.#autor;
    }
    get nPaginas() {
      return this.#nPaginas;
    }
    set ISBN(nuevoISBN) {
      this.#ISBN = nuevoISBN;
    }
    set titulo(nuevotitulo) {
      this.#titulo = nuevotitulo;
    }
    set autor(nuevoautor) {
      this.#autor = nuevoautor;
    }
    set nPaginas(nuevoNPaginas) {
      this.#nPaginas = nuevoNPaginas;
    }
    mostrarLibro() {
      document.write(`<p>Libro "${this.titulo}" con ISBN ${this.ISBN}
      creado por el autor ${this.autor}
      tiene ${this.nPaginas} páginas </p>`);
    }
  }
  
  const libroUno = new Libro(147, 'Como agua para chocolate', 'Laura Esquivel', 1500);
  libroUno.mostrarLibro();
  const libroDos = new Libro(852, 'El Principito', 'Antoine de Saint-Exupéry', 1000);
  libroDos.mostrarLibro();
  
  if (libroUno.nPaginas > libroDos.nPaginas) {
      document.write(`El libro "${libroUno.titulo}" tiene más páginas`)
  }else{
      document.write(`El libro "${libroDos.titulo}" tiene más páginas`)
  }