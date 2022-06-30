// Fechas
// Cambia por zona horaraio
// Recordemos que cambiar la hora pero el minuto y segundo se mantiene
// esto es manejable
// actualmente js tiene funciones que en base a la zona horaria
// van a setear la hora

// como podemos capturar la hora de nuestro navegador
// para poder obtener la hora en JS usamos no que new Date()

// Instanciar
//! recurden que cuando usamos new Clase y la guardamos en una variable
// esto se llama instaciar
//* Date() es una clase nativa de de JS, es decir viene con el lenguaje
const fecha = new Date();
console.log(fecha);
//* al usar new Date() tenemos acceso a diferentes funciones
//* que nos ayudan a extraer partes de la fecha

// Dia
const dia = fecha.getDate();
console.log("dia", dia);

// Mes
// Cuando hablamos de meses, debemos saber que en JS
// el mes empizar a desde 0
// Enero = 0
// Febrero = 1
// Marzo = 2
// Abril = 3
// Mayo = 4
// Junio = 5
// Julio = 6
// Agosto = 7
// Septiembre = 8
// Octubre = 9
// Noviembre = 10
// Diciembre = 11
const mes = fecha.getMonth() + 1;
console.log("mes", mes);

// Año
const year = fecha.getFullYear();
console.log("Year", year);

//  JS => La primera fecha que tiene es 1970
// Cuando usamos getTime nos va a retornar hora en milisegundo

// Podemos sacar la hora?
//getHours si retorna el numero de la hora
const hora = fecha.getHours();
console.log("hora", hora);

const minutos = fecha.getMinutes();
console.log("minutos", minutos);

const segundos = fecha.getSeconds();
console.log("segundos", segundos);

const milisegundos = fecha.getMilliseconds();
console.log("milisegundos", milisegundos);

// UTC => Es la hora global
const diaGlobal = fecha.getUTCDate();
console.log("dia globlal", diaGlobal);

// En teoria fecha es string
// existe una funcion llama typeof la cual me permite saber
// que tipo de datos es un variable
console.log("Type", typeof fecha);
const fechaString = String(fecha);
console.log("Type", typeof fechaString);
console.log("Fecha", fechaString);

// Existe una funcion la cual me permite transformar un text string
// a un array
// Ejmplo
const frase = "Hola me llamo Juan"; // ['Hola', 'me', 'llamo', 'Juan']
const frase2 = "Como estas:bien supongo";
const frase3 = "Mi numero es >= 99999";
// Este string vamos a transformarlo a array
// En este caso quiero separar por " "
// Ustedes pueden poner cualquier caracter
console.log(frase.split(" "));
console.log(frase2.split(":"));
console.log(frase3.split("9"));

console.log("Fecha en string", fechaString.split(" ")[5]);
// para el pais
console.log("Pais", fechaString.split(" ")[6]);
// Reto quitar el (Peru
// Sepan que existe una funcion llamada replace la
// cual permite reemplazar un texto por un texto nuevo
const pais = fechaString.split(" ")[6]; // (Peru
// Replace recibe 2 parametros
// 1 el texto que queremos reemplazar
// 2 el text nuevo
// En este caso
// 1 => ( 
// 2 => "" // nada
// En español buscar el ( y reemplazalo por ""
console.log(pais.replace("(", ""));
//! Nota "" => Cuando vean 2 comillas sin espacio eso
//! es igual a vacio 
