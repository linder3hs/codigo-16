// FOR

// RECORDEMOS QUE UN FOR NOS PERMITE ITERAR(RECORRER) UN ARRAY
// for (let i = 0; i < 10; i++) {
//   console.log(i);
// }

for (let i of ["aaa", "bbb"]) {
}

for (let i in ["aaa", "bbb"]) {
}

// Lo que sigue del for es el ForEach
// Este forEach es usando para poder iterar elementos sin retornar nada
// en forEach no existe el return
const alumnos = ["juan", "pepe", "luis", "maria", "carla", "ale"];
// La forma en la cual usamos forEach es la siguiente
// el forEach es una funcion de los arrays

// Es esta fumcion forEach tenemos 2 cosas,
//1: El value => Es el valor que extraemos en cada interacion
//2: El index => Es la posicion del elemento
alumnos.forEach((value, index) => {
  console.log("index =>", index);
  console.log("value =>", value);
});

//! Nota esta forma de recorrer un arreglo es moderna
//! Tener en cuenta que el return no es posible en el forEach
const carros = [
  {
    modelo: "Nissan GTR",
    price: 10000,
  },
  {
    modelo: "Mercedez GLA 2000",
    price: 20000,
  },
  {
    modelo: "BMW x6",
    price: 30000,
  },
];

carros.forEach((carro, index) => {
  if (index === 0) {
    console.log(carro);
  }
});
