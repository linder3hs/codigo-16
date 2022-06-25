// Una funcion es un bloque de codigo que realiza una accion

// la sintaxis de una function se divide. en 3

// Los mas clasico y antiguo
function nombreDeLaFuncion() {
  // En este espacio podemos escribir codigo
  const alumnos = ["Pepe", "Juan", "Maria", "Luisa", "Lex", "Lucas", "Klark"];

  for (let alumno of alumnos) {
    console.log(alumno);
  }
}

// Nota para hacer que una funcion se ejecute debemos llamarla
// Esta accion que acabamos de hacer se llama ejecutar a la funcions
nombreDeLaFuncion();

// Ahora haremos una funcion que retorne una valor

// Teoricamente hay 2 clases de funciones
// Funciones impuras => Es una funcion que no retorna un valor
// Funciones puras.  => Es una funcion que retorna valor

// * Las funcion tienen la opcion de usar "return" que es una
// * parala reserva de JS la cual sirve para devolver un valor

function cuboDeUnNumero() {
  return Math.pow(10, 3);
}

// recurden que esta es llamar a una funcion
const resultado = cuboDeUnNumero();

console.log("resultado", resultado);

// Una funcionalidad es el poder enviar valores a las funciones
// Lo que esta dentro del parentesis en una funcion se llaman parametros
// y podemos enviar n parametros
//* Los parametros deben estar separados por comas
function potenciaDeUnNumero(numero, potencia) {
  return Math.pow(numero, potencia);
}

const ejemplo1 = potenciaDeUnNumero(4, 3); // 4 al cubo
const ejemplo2 = potenciaDeUnNumero(6, 2); // 6 al cuadrado
console.log(ejemplo1);
console.log(ejemplo2);

//Implementar un algoritmo que reciba 2 argumentos y los sume,
//el resultado se deberá imprimir en pantalla.
function sumar(numero1, numero2) {
  // Cuado hagamos una funcion siempre debemos tener en cuenta que casos
  // pueden sucedr
  // Eso se llama validacion
  const n1 = Number(numero1);
  const n2 = Number(numero2);

  if (isNaN(n1) || isNaN(n2)) {
    return "No se pueden sumar";
  }

  return n1 + n2;
}

console.log("Suma", sumar(1, "10"));

// Paso 1 creo una funcion que me retorne el factorial
function calcularFactorial(numero) {
  // 4 = 1 x 2 x 3 x 4 = 24
  const number = Number(numero);

  //! Nota el return aparte de retornar un valor da fin a la
  //! ejecucion de la funcion
  if (isNaN(number)) {
    return "Esto no se puede hacer porque no es un numero";
  }

  let resultado = 1;
  for (let i = 1; i <= numero; i++) {
    resultado *= i;
  }

  return resultado;
}

//? Nota: Otra cosa chevere es que podemos usar una funcion dentro de otra funcion
function imprimirFactorial() {
  const inputValor = document.getElementById("input_number").value;
  const resultado = calcularFactorial(inputValor);

  // Esta linea estamos buscando el HTML al elementos que tenga la clase
  // container cuando lo encuentro lo guarda en la variable container
  // Luego de esto podemos usar la propiedad innerHTHML para poder
  // agregar HTML a este cotainer

  //!querySelector Es una funcion de JS la cual permite buscar elementos de una forma sencilla
  //!Nota el . , # o el nombre del elmento ejem : ul,div,h4 son selectore de elmentos HTML
  // Cuando es una clase  document.querySelector(".container")
  // Cuando es un ID document.querySelector("#container")
  // Cuando es un elemento document.querySelector("div")
  const container = document.querySelector(".container");
  container.innerHTML +=
    "<p>Factortorial de " + inputValor + ": " + resultado + "</p>";
}

// Reto: Crear una vista la cual tenga un input y boton
// esta debera mostar en pantalla la tabla de multiplar
// Ejemplo 5
// 5 x 1 = 5
// 5 x 2 = 10
// 5 x 3 = 15
// 5 x 4 = 20
// 5 x 5 = 25
// 5 x 6 = 30
// 5 x 7 = 35
// 5 x 8 = 40
// 5 x 8 = 45
// 5 x 10 = 50
function calcularTabla() {
  const inputNumber = document.querySelector("#input_number_2");
  let container = document.querySelector(".resultado");

  container.innerHTML = "";

  const numero = Number(inputNumber.value);
  // Es es basicamente para limpiar el input
  inputNumber.value = "";

  if (isNaN(numero)) {
    alert("Ingrese un numero valido");
    // Recureden que el return aparte de retonar un valor tambien terminar la ejecucuion
    // de la funcuion en este nos retornarmos pero si tenemos una alert
    // y luego un return sin nada para que en este caso solo se encargue de terminar la ejecucion
    return;
  }

  for (let i = 1; i <= 12; i++) {
    container.innerHTML +=
      "<p>" + numero + " x " + i + " = " + i * numero + "</p>";
  }
}
