// document.write("<h1>Dia 3 Switch</h1>");

// let angulo = 20;
// document.write("<p>" + angulo + "</p>");

// let mensaje = "<p>INEXS.</p>";

// if (angulo === 0) {
//   mensaje = "<p>Nulo.</p>";
// } else if (angulo < 90) {
//   mensaje = "<p>Águdo.</p>";
// } else if (angulo === 90) {
//   mensaje = "<p>Recto.</p>";
// } else if (angulo < 180) {
//   mensaje = "<p>Obtuso.</p>";
// } else if (angulo === 180) {
//   mensaje = "<p>Llano.</p>";
// } else if (angulo < 360) {
//   mensaje = "<p>Concavo.</p>";
// } else if (angulo === 360) {
//   mensaje = "<p>Completo.</p>";
// }

// document.write(mensaje);

// // SWITCH

// //* Esto dice que angulo va a ser la variable padre

// //* y cada case vamos a evaluar esta variable, sin embargo no hace falta
// //* volver a llamar a la variable

// //! Una recomendacion es usar break despues de cada case
// //! break: Sirve para detenr el switch

// // queremoa analizar un rango 0...10
// switch (angulo) {
//   case 0:
//     document.write("<p>Nulo.</p>");
//     // despues de ejecutar lo que queremos
//     break;
//   case 90:
//     document.write("<p>React0.</p>");
//     break;
//   case 180:
//     document.write("<p>LLano.</p>");
//     break;
//   case 360:
//     document.write("<p>Completo.</p>");
//     break;
// }

// // js switch with range
// let edad = 20;

// switch (edad) {
//   case 0:
//     console.log("Reicien nacido");
//     break;
//   case 18:
//     console.log("Mayor de edad");
//     break;
//   case 20:
//     console.log("Entro a base 2");
//     break;
//   case 65:
//     console.log("Entro a la 3ra edad");
//     break;
//   default:
//     console.log("Este caso no esta conteplado");
//   // !Nota en el defaulta no hace falta poner break porque solo entra
//   // !ahi cuando ni una otra opcion funciona
// }

const nombres = ["Pepe", "Juan", "Maria", "Luisa", "Carlos", "Lucas", "Linder"];

console.log(nombres);
console.log(nombres[3]);
console.log(nombres[6]);
// ! Nota si queremos mostrar un dato en una posicon que no existe
// js retorna un undefined
// length => Esta funcion retonarna la cantidad de elementos
console.log("Nombres", nombres.length); // 6 o 7?

const datos = [1, true, false, -2, "Hola mundo"];

console.log("datos", datos.length);

// Pregunta si quieres acceder al ultimo elemento usando length
console.log("datos", datos[datos.length - 1]);

// Push: Sirve para poder agregar un elemento al array
// lo agrega en la ultima posicion
datos.push("Agregando un dato");
console.log("datos con push", datos);
console.log("Agregando un array dentro de un array");
datos.push(["Pepe", "Juan", "Maria"]);
console.log(datos);

const datosPrueba = [
  1,
  true,
  false,
  -2,
  "Hola mundo",
  "Agregando un dato",
  ["Pepe", "Juan", [1, 2, 4, 5, [-1, -2, -4]], "Maria"],
];

console.log(datosPrueba[3]);
console.log(datosPrueba[6][0]);
console.log(datosPrueba[6][2][3]);
console.log(datosPrueba[6][2][4][2]);

console.log(datosPrueba[6][2].length); // 5

console.log(datosPrueba[6][datosPrueba[6].length - 3]);
console.log(
  datosPrueba[6][datosPrueba[6].length - 2][datosPrueba[6][2].length - 1]
);

// Pop es una funciona para poder eleminar el ultimo elemento de un array
const laptops = ["hp", "macbook", "asus", "lenovo"];
console.log("Laptops: ", laptops);
// Retorna el elemento eliminado
console.log("Elemento eliminado", laptops.pop());
console.log("Laptops: ", laptops);

// Supongamos que tengamos una lista de alumnos
const alumnos = ["Luis", "Juan", "Maria", "Luciana", "Lucas"];
const alumnoEliminado = alumnos.pop();
console.log("El alumno " + alumnoEliminado + " fue eliminado");
console.log("Alumnos", alumnos);

// unshift: Esta funcion agrega un elemento a un array pero en la
// primera posicion
alumnos.unshift("Daniel");
console.log("Unshift", alumnos);
//ojo hemos agregado a Daniel
// shift: Esta funcion elminar al primer elemento de un array
console.log("Shift", alumnos.shift());
