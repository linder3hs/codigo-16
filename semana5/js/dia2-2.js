const container = document.querySelector(".container");
// vamos a obtener el input y el boton
// lo que seria incorreacto es poner
// container = document.querySelector("#input-search");

const inputSearch = document.querySelector("#input-search");
const btnSearch = document.querySelector("#btn-search");
const btnClean = document.querySelector("#btn-clean");

function createCards(arrayDeDatos) {
  // Se acuerdan que el otro dia mencionamos que antes de una iteracion debemos
  // limiar el container
  container.innerHTML = "";
  inputSearch.value = "";

  if (arrayDeDatos.length === 0) {
    container.innerHTML = "<h2>No se encontro resultados</h2>";
    // recurden que el return detiene la ejecuion de la funcion
    return;
  }

  // quiero agregar elemenos al container
  arrayDeDatos.map((laptop) => {
    // ahora en esta seccion vamos a crear los card
    // Esto es JS se llama template string => ``
    // Sirve para poder tener texto y variable juntos
    // return `La laptop se llama ${laptop.nombre} y el precio es ${laptop.precioOferta}`;
    container.innerHTML += `
  <div class="card">
      <h4 class="title">${laptop.nombre}</h4>
        <div class="container-photo">
        <img
            src=${laptop.imagen}
            alt=""
            width="300"
        />
        </div>
        <div class="container-price">
          <p class="price">Precio: S/ ${laptop.precioNormal}</p>
          <p class="sale-price">Oferta: S/ ${laptop.precioOferta}</p>
        </div>
        <button class="btn-buy">Comprar</button>
  </div>
   `;
  });
}

createCards(laptops);

//que evento usando lara capturar el click de un boton
btnSearch.onclick = function () {
  // al darle al boton necesitamos obtener el texto del input
  const textSearch = inputSearch.value;
  // Seria buena idea validar que el input este lleno?
  // Si el input esta vacio vamos a lanzar una alerta indicando que deberia esta lleno
  if (textSearch === "") {
    alert("Debe escribir un texto para iniciar la busqueda");
    // que debemos poner para que la funcion termine su ejecucion?
    return;
  }

  // recuerden que solo entra al if si esta vacio si no hara lo siguiente
  //? Nota: Estamos transformando a minuscula ambos textos
  // tanto el de la busqueda como el del array de objetos
  const filtro = laptops.filter(
    (laptop) =>
      laptop.nombre.toLowerCase().includes(textSearch.toLowerCase()) ||
      laptop.marca.toLowerCase().includes(textSearch.toLowerCase()) ||
      laptop.vendedor.toLowerCase().includes(textSearch.toLowerCase())
  );
  // luego del filtro a quien debemos llamar?
  createCards(filtro);
};

btnClean.onclick = () => createCards(laptops);
