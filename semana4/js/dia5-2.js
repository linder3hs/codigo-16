// En la funciones existe parametros con valores predefinidos

// cuando llamamos a la funcion restar es obligatorio pasar los 2 parametros?
// Existe una forma en la cual podemos decir que un parametro tiene un valor por
// defecto

function restar(numero1 = 2, numero2 = 5) {
  console.log(numero1);
  console.log(numero2);
  return numero1 - numero2;
}

// En el caso que a la funcion restar solo le pasen el numero1 esta de forma
// automatica asumira que numero2 vale 5
console.log("Resta1", restar(6)); // 1 porque recordemos que como no le estamos pasando el 2do
// parametro este asume que vale 5
console.log("Resta2", restar(4, 8)); // -4

console.log("Resta3", restar()); // -3 porque asume que numero1 = 2 y numero = 5

console.log("Resta4", restar(4, 4));

// Funciones anonimas
// Son funciones sin nombre
// A nivel de JS esto no es el nombre de la funcion
// es considerado una variable que guarda una funcion
// aca estamos demostrar que una variable en JS puede almacenar una funcion

//!Nota el funcionamiento es igual
//!Lo que cambiar la forma en la cual se escribe
//! ademas cuando funciones anonimas no tenemos acceso a this

//! this Es una forma en la cual podemos accede a variable usando clases
const multiplar = function (n1, n2 = 3) {
  return n1 * n2;
};

multiplar(5, 6);

//* Lo que se utiliza actualmente son los arrow funcion => funciones flecha
//* En el caso de la funciones flecha no hace falta escribir la palabra
//* function esta implicita
//* Un arrow funcion es considerado una funcion anonima por ende tampoco
//* tiene acceso a this
const dividir = (n1, n2) => {
  return validarSiEsNumero(n1) || validarSiEsNumero(n2)
    ? "Erro numero no valido"
    : n1 / n2;

  // if (validarSiEsNumero(n1) || validarSiEsNumero(n2)) {
  //   return "Erro numero no valido";
  // } else {
  //   return n1 / n2;
  // }
};

//* Esto no excluye a que podamos combiar funcion

// Recordemos que isNaN retornar un boolena por ende esta
// funcion retora true o false
function validarSiEsNumero(numero) {
  //isNaN is not a number
  // Si no es un numero (numero)
  return !isNaN(numero);
}

// De forma global vamos a crear un array de alumnos
// Esto es un array vacio
const alumnos = [];
// alumnos = ["Juan", "Pepe"]

const imprimirAlumnos = () => {
  const inputNombre = document.querySelector("#input_name");
  const nombre = inputNombre.value;
  // Estamos agregando el alumnos al array
  alumnos.push(nombre);
  // Estamos indicando el value del input es igual cuando hacemos estos
  // estamos limpiado el contenido del input
  inputNombre.value = "";
  const resultado = document.querySelector(".resultado");

  // Siempre debemos limpiar el espacio del resultado antes del for
  resultado.innerHTML = "";

  for (let alumno of alumnos) {
    // += es adicion es una suma la
    //  resultado.innerHTML = resultado.innerHTML + "<p>" + alumno + "</p>";
    // Indica que al contenido anterior le agremos esto si yo no uso el +=
    // va a reemplazar el contenido
    resultado.innerHTML += "<p>" + alumno + "</p>";
  }
};

//Registrar el ingreso de notas de 4 examenes y calcular el promedio de estos.
// Funcion que reciba 4 parametros valide si son numeros y si todo esta ok que retorne el promedio

// los valores pueden por inputs o por prompt
const calcularPromedio = () => {
  const nota1 = Number(document.querySelector("#input_nota1").value);
  const nota2 = Number(document.querySelector("#input_nota2").value);
  const nota3 = Number(document.querySelector("#input_nota3").value);
  const nota4 = Number(document.querySelector("#input_nota4").value);
  const resultado2 = document.querySelector(".resultado2");

  if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3) || isNaN(nota4)) {
    alert("Ingrese numeros validos");
    return;
  }

  if (nota1 > 20) {
    alert("La nota 1 no debe ser mayor a 20");
    return;
  }

  if (nota2 > 20) {
    alert("La nota 2 no debe ser mayor a 20");
    return;
  }

  if (nota3 > 20) {
    alert("La nota 3 no debe ser mayor a 20");
    return;
  }

  if (nota4 > 20) {
    alert("La nota 4 no debe ser mayor a 20");
    return;
  }

  const promedio = (nota1 + nota2 + nota3 + nota4) / 4;
  resultado2.innerHTML = "<p>El pomedio es: " + promedio + "</p>";
};
