// Array de Objetos
const users = [
  {
    name: "Linder",
    lastName: "Hassinger",
    phoneNumber: "99999999",
    address: "Calle falsa 123",
    isDeveloper: true,
    age: 22,
  },
  {
    name: "Juan",
    lastName: "Zapata",
    phoneNumber: "99999999",
    address: "Calle falsa 1234",
    isDeveloper: false,
    age: 21,
  },
];

for (let user in users) {
  console.log(users[user].name);
}

console.log("================");

for (let user of users) {
  console.log(user.name);
}

// DOM
// Document Object Model
const variableH1 = document.querySelector("h1");
// innerHTML = Se usa para escribir etiquetas
// innerText = Para poder escribir dentro de las etiquetas
variableH1.innerText = "Cambiando el valor del H1 desde JS";
console.log(variableH1);
// Podremos cambiar el title desde JS?
document.title = "Lo hicimos en JS";

// tagname = El nombre de la etiqueta
// ejm
// <h1> </h1> = h1
// <div></div> = div

// SEPAN QUE TAMBIEN PODEMOS MODIFICAR EL CSS
// La forma en la cual podemos modifcar los estilos de nuestra
// pagina es usando style

//! Nota: Las propiedad son las misma que CSS sin embargo no usan guiones
//! En JS se usa camellcase
document.body.style.backgroundColor = "#c3c3c3";
document.body.style.fontFamily = "Helvetica";

//* Lo recomendable no es usar CSS dentro de JS
variableH1.style.color = "blue";

//! NOTA SUPER IMPORTANTE : EN JS TODO ES UN OBJETO
