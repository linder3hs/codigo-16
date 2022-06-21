// variable que pueda cambiar de tipo
let numero = 10;
console.log("Primer tipo", numero);
// podemos cambiar el tipo de datos?
// cuando alteramos el valor de una variable hace falta poner let o const?
// let o const va solo cuando se crea la variable
numero = "Pepe";
console.log("Segundo tipo", numero);

// vamos a ver el console.log()
// permite imprimir un valor en la consola del navegador
// console.log(numero);

//! Const
const igv = 0.18;
console.log("Primer igv", igv);

//! Esto no es posible
// igv = 0.2;
// console.log("Segungo igv", igv);

// Existe otra forma de poder mostar una variable
// alert: Dispara una alerta en nuestro navegador
// alert(igv);

//* Concatenacion : Basicamente es juntar 2 0 mas variable
const primerNombre = "Linder";
const primerApellido = "Hassinger";
let edad = 22;
let dias = 20;
let estaVivo = true;

// Para poder concaternar 2 o mas strings usamos el operador +
console.log("Concatenacion");
console.log(primerNombre + " " + primerApellido + edad);

// Habra alguna de forma de convertir un number a un string
// 2220

// Sepamos que en JS existen String y Number
// Al hacer esto estamos transformando un entero a un string
// "22" + "20" = "2220"
console.log(String(edad) + String(dias));
// El poner la coma no es concatenar es basicamente que podemos imprimir
// un valor al costado de otro y esto no se van a unir
console.log("Usando comas");
console.log(edad, dias);
console.log("Usando el +");
console.log(edad + dias);
console.log("Bool", estaVivo);
console.log("String", String(estaVivo));

// En JS podemos hacer cualquier tipo de operacion matematica
// + - * /
console.log(edad + dias);
