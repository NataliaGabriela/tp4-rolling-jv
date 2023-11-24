let cuenta = {
    titular: "Alex",
  
    saldo: 0,
    ingresar: function (cantidadParam, saldo) {
      return (saldo = cantidadParam + saldo);
    },
  
    extraer: function (cantidadParam, saldo) {
      return (saldo -= cantidadParam);
    },
    informar: (nuevoSaldo, saldo, titular) => {
      document.write(`Titular: ${titular} <br>`);
      document.write(`su saldo anterior es: ${saldo} <br>`);
      document.write(`su saldo actual es: ${nuevoSaldo} <br>`);
    },
  };
  let i = 0;
  
  let montoIngresado = 0;
  let nuevoSaldo = 0;
  
  console.log(cuenta.saldo);
  
  let opcion = parseInt(
    prompt(
      `Ingrese la opcion que desea operar  1- Ingresar Dinero  2- Extraer dinero  3-Consultar Informacion`
    )
  );
  switch (opcion) {
    case 1:
      montoIngresado = parseInt(prompt("Ingrese el monto de dinero"));
      nuevoSaldo = cuenta.ingresar(montoIngresado, cuenta.saldo);
      cuenta.informar(nuevoSaldo, cuenta.saldo, cuenta.titular);
      console.log(montoIngresado);
      break;
    case 2:
      if (cuenta.saldo > 0) {
        montoIngresado = parseInt(prompt("Ingrese el monto que desea extraer"));
        nuevoSaldo = cuenta.extraer(montoIngresado, cuenta.saldo);
        cuenta.informar(nuevoSaldo, cuenta.saldo, cuenta.titular);
      } else {
        document.write("No tiene dinero en la cuenta para extraer");
      }
  
      break;
    case 3:
      cuenta.informar(cuenta.saldo, cuenta.saldo, cuenta.titular);
      break;
  
    default:
      alert("Ingrese una opcion correcta");
      break;
  }
  