// forEach

// Recurden que el return no existe en el forEach
// La alternativa que tendremos al forEach se llama map
const products = [
  {
    name: "Laptop HP",
    price: 1300,
    brand: "HP",
  },
  {
    name: "Laptop Gamer",
    price: 2100,
    brand: "Lenovo",
  },
  {
    name: "Laptop Super Poderosa",
    price: 5300,
    brand: "Alien Ware",
  },
  {
    name: "Laptop/Tablet",
    price: 2400,
    brand: "ASUS",
  },
];

// users.forEach(user)
// movies.forEach(movie)

// products.forEach((product, index) => {});

// * forEach

const productsIterForEach = products.forEach((product) => {
  // Recurden que product es cada elemento de mi array
  // console.log(product.name);
  return product.price - 100;
});

//* map
// queremos agregar un nuevo campo al array de objetos
// ese campo se llamara descuente que sera el precio - 100 soles

// En este caso estamos calculado el campo discount y lo estamos
// guardando en productsIterMap

// Los valores que esta capturando nuestro map los esta guardando en
// la varable productsIterMap y esto sera un arreglo de los
// resultados
const productsIterMap = products.map((product) => {
  // 1200
  // 2000
  // 5200
  // 2300
  return product.price - 100;
});

// Resument: Siempre el map retorna un array de elementos

console.log("forEach", productsIterForEach);
console.log("map", productsIterMap);
// Cuando decimos que forEach no retorna nada quiere decir que no se
// puede guardar dentro de una variable

const edades = [23, 21, 34, 45, 28, 30];

// Esto es conocido como un arrow function inline
// En el arrow function inline el return esta implicito
// Se usa solo cuando tengamos una sola linea de codigo a ejectura

// const edadadesAlCuadra = edades.map((edad) => {
//   return Math.pow(edad, 2);
// });

const edadadesAlCuadrado = edades.map((edad) => Math.pow(edad, 2));
console.log(edadadesAlCuadrado);

// Reto
// Creen un array de edades
// const edades = [23, 21, 34, 45, 28, 30];
// y usando for o forEach hagan que una variable guarda el cuadrado de la edades
const nuevasEdads = [];
edades.forEach((edad) => nuevasEdads.push(Math.pow(edad, 2)));
console.log("nuevasEdads", nuevasEdads);

const clothes = [
  {
    brand: "Mango",
    type: "Shirt",
    price: 200,
    store: "Falabella",
    rating: 4.3,
    features: {
      color: "green",
      size: "small",
    },
  },
  {
    brand: "Zara",
    type: "Pants",
    price: 300,
    store: "Zara",
    rating: 3.9,
    features: {
      color: "black",
      size: 32,
    },
  },
  {
    brand: "Tommy",
    type: "T-shirt",
    price: 120,
    store: "Tommy",
    rating: 4.3,
    features: {
      color: "blue",
      size: "M",
    },
  },
];

// Filter: Es el hermano de map
// porque filter tambien retorna un array de elementos
// sin embargo filter sirve para poder crear filtro en base a un condicion

// queremos solo los productos que tenga como precio > 100
// Si el elemento es > 100 entonces guardalo en la variable filtro

// Filtro de precio
const filtro = clothes.filter((clothe) => clothe.price > 150);
// por ende filtro sera un array con 2 elementos
console.log("filtro 1", filtro);

// Filtro de 2 condiciones
// Pedimos que el precio sea > 150 y rating > 4
const filtro2 = clothes.filter(
  (clothe) => clothe.price > 150 && clothe.rating > 4
);
// cuantos elementos retorna el filtro 2?
console.log("filtro 2", filtro2);

// vamos a buscar en el array de objetos las prendas que contengan la palabra shirt
// En la condicion clothe.type.includes("shirt")
// quiero que en el string clothe.type busques si "shirt" existe
// un truco para evitarnos el tema del las mayusculas o minusculas
// es convertir el texo a mayusulas o minusculas
// T-shirt => t-shirt
// pants => pants
// Shirt => shirt

// includes basicamente sirve para buscar algo en un texto
// ejempo
const frase = "HolameLlamocarlos";
// Basicamente include recibe un paramtro string y lo busca en el texto
// si lo encuentro retorna true si no lo hace retorana false
//HolameLlamocarlos => holamellamocarlos
console.log(frase.toLocaleLowerCase().includes("llamo"));

const filtroShirt = clothes.filter((clothe) =>
  clothe.type.toLocaleLowerCase().includes("shirt")
);
console.log("filtroShirt", filtroShirt);
