class Producto {
    constructor(codigoParam, nombreParam, precioParam) {
      this.codigo = codigoParam;
      this.nombre = nombreParam;
      this.precio = precioParam;
    }
  
    imprimeDatos() {
      document.write(`<p>Código del Producto: ${this.codigo}</p>`);
      document.write(`<p>Nombre: ${this.nombre}</p>`);
      document.write(`<p>Precio: $ ${this.precio}</p>`);
    }
  }
  
  const arrayProductos = [];
  
  const productoUno = new Producto(4578, "SMART TV", 908000);
  arrayProductos.push(productoUno);
  const productoDos = new Producto(5993, "CELULAR", 105000);
  arrayProductos.push(productoDos);
  const productoTres = new Producto(8772, "BICICLETA", 1995200);
  arrayProductos.push(productoTres);
  console.log(arrayProductos.length);
  
  for (let i = 0; i < arrayProductos.length; i++) {
    document.write(`<h3>Producto número ${i + 1} </h3>`);
    arrayProductos[i].imprimeDatos();
  }
  