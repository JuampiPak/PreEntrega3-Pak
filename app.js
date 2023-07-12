const calculadoraDeProductos = (producto, cuotas) => {
  return producto / cuotas;
};

// variable booleana que se encarga de ejectuar el programa
let tienda = true;

do {

  let productoIngresado = prompt("Ingrese el valor de un producto")
  let cuotas = prompt("Ingrese la cantidad de cuotas");

  // condicionales para ejecutar la calculadora
  if(productoIngresado != "" && cuotas != ""){

    let resultado = calculadoraDeProductos(productoIngresado, cuotas)

    alert("El precio del producto es: " + productoIngresado + "\nCuotas que elegiste: " + cuotas + "\nTotal a pagar por cuota: $" + resultado);

  } else{
    alert("Vuelva a ingresar los productos y cuotas");
  }

  let seguirCalculando = prompt("¿Desea seguir calculando productos? Ingrese 'SI' o 'NO' para salir").toUpperCase();

  // condicional para que se repita o no el programa.
  if(seguirCalculando === "NO"){
    tienda = false;
    break;
  } else {
    tienda = true;
  }

} while (tienda);