// ==          Es igual
// ===         Es estrictamente igual
// !=          Ed distinto
// !==         Es estrictamente distinto
// < <= > >=   Menor / Menor-igual / Mayor / Mayor-igual

// &&             AND
// ||             OR
// !              NOT

// let edad = prompt("ingrese su edad:");

// if (edad>=18) {
//     alert("sos mayor de edad");
// } else {
//     alert("sos menor de edad WAchinsinnnnn");
// }

// let hora = prompt("Ingrese la hora:");

// while (hora < 0 || hora > 24) {
//   hora = prompt("Ingrese la hora correctamente:");
// }

// if (hora >= 6 && hora <= 12) {
//   alert("Buenos dias");
// } else if (hora >= 13 && hora <= 20) {
//   alert("Buenas tardes");
// } else if (hora >= 21 && hora <= 24) {
//   alert("Buenas noches");
// } else {
//   alert("Es de madrugada");
// }

// // Funciones declaradas
// function saludar(nombre) {
//   alert("hola, Mundo " + nombre);
// }

// saludar("");

// while (primero == " " || segundo == " " || operacion == " ") {
//   let primero = prompt("Primer numero");
//   let segundo = prompt("Segundo numero");
//   let operacion = prompt("operacion a realizar");
// }

// let resultado = calculadora(primero, segundo, operacion);

// alert(resultado);

// let primero = prompt("Primer numero");
// let segundo = prompt("Segundo numero");
// let operacion = prompt("operacion a realizar");

// alert("Inicia");
// console.log("INICIA");

// let resultado;

// do {
//   let primero = Number(prompt("Primer numero"));
//   let segundo = Number(prompt("Segundo numero"));
//   let operacion = prompt("operacion a realizar");
//   let resultado = calculadora(primero, segundo, operacion);
//   alert(resultado);
// } while (resultado === "undefined" || resultado === "null" || isNaN(resultado));

// function calculadora(primero, segundo, operacion) {
//   switch (operacion) {
//     case "+":
//       return primero + segundo;
//       break;
//     case "-":
//       return primero - segundo;
//       break;
//     case "*":
//       return primero * segundo;
//       break;
//     case "/":
//       return primero / segundo;
//       break;
//      default:
//        return 0;
//        break;
//   }
// }

// alert("Finaliza");
// console.log("Finaliza");
let primerNumero = prompt("Ingrese primer numero");
let segundoNumero = prompt("Ingrese segundo numero");
let operacion = prompt("Ingrese operacion (+, -, *, /)");

console.log(validarNroError(primerNumero));
console.log(validarNroError(segundoNumero));
console.log(validarOperacion(operacion));

while (
  validarNroError(primerNumero) ||
  validarNroError(segundoNumero) ||
  validarOperacion(operacion)
) {
  console.log("INGRESO AL WHILE");

  primerNumero = prompt("Ingrese primer numero");
  segundoNumero = prompt("Ingrese segundo numero");
  operacion = prompt("Ingrese operacion (+, -, *, /)");

  console.log("   PRIMER NUMERO ---> " + validarNroError(primerNumero));
  console.log("   SEGUNDO NUMERO ---> " + validarNroError(segundoNumero));
  console.log("   OPERACION ---> " + validarOperacion(operacion));
}

alert(
  "El resultado de la operacion es: " +
    calcular(primerNumero, segundoNumero, operacion)
);

function validarNroError(ingreso) {
  if (isNaN(ingreso)) return true;
  else return false;
}

function validarOperacion(operacion) {
  if (
    operacion !== "+" &&
    operacion !== "-" &&
    operacion !== "*" &&
    operacion !== "/"
  ) {
    return true;
  } else {
    return false;
  }
}

function calcular(numeroUno, numeroDos, operacion) {
  if (operacion === "-") {
    return numeroUno - numeroDos;
  } else if (operacion === "+") {
    return numeroUno + numeroDos;
  } else if (operacion === "*") {
    return numeroUno * numeroDos;
  } else {
    return numeroUno / numeroDos;
  }
}

cotizacion = calculo(distancia, valor, tipo);

if (cotizacion === false) {
  alert("No se puede realizar la cotizacion");
} else {
  alert("La cotizacion es: " + cotizacion);
}
