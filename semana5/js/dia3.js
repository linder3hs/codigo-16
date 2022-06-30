// every y some
// Son funciones que nos permiten iterar sobre una colección de elementos.
// ahora esta dos 2 funcion no retornar array lo que retorna every y some
// som boolean
//! true o false
// Nos sirve para poder valir una condicion y que aplique
// a cada uno de los elementos iterados

//* every = &&
//* some = ||

// Ejmplo de every
const edades = [10, 20, 30, 40];

// Esto va a analizar todo el array y tiene que
// verificar que cada elemento cumpla la condicion
const analizandoEdades = edades.every((edad) => edad > 20);
//! Nota importante para que every retorne true cada element debe
//! cumplir la condiucion
console.log(analizandoEdades);

const analizando2 = edades.every((edad) => edad !== "");
console.log(analizando2);

const alumnos = [
  {
    name: "Pepe",
    age: 21,
  },
  {
    name: "Luis",
    age: 18,
  },
  {
    name: "Maria",
    age: 19,
  },
];

// Queremos saber si los alumnos son mayores edad
console.log(
  "es mayor",
  alumnos.every((alumno) => alumno.age >= 18)
);

// Some
// Pero el evalua los elementos y si alguno de ellos cumple
// la condicion es true
const precios = [121, 313, 121, 873];

// vamos a evaluar si alguno de ellos es par
console.log(
  "precios",
  precios.some((precio) => precio % 2 === 0)
);

//! Nota recuerden que si ni un elemento cumple la condicion 
//! some retorna false
