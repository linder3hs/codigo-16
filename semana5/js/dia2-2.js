const laptops = [
  {
    marca: "Lenovo",
    imagen:
      "http://s3.amazonaws.com/imagenes-sellers-mercado-ripley/2021/05/05131939/0013.jpg",
    nombre: "Ide Centre AIO I3",
    vendedor: "Falabella",
    precioOferta: 1599,
    precioNormal: 3599,
    calificacion: 2,
    caracteristicas: {
      procesador: "i3",
      tarjetaDeVideo: "integrada",
      discoDuro: true,
      discoDuroSolido: "1TB",
    },
  },
  {
    marca: "Acer",
    imagen:
      "http://static.acer.com/up/Resource/Acer/Laptops/Aspire_5/images/20220427/acer-aspire-5-a514-55-55g-fingerprint-backlit-steel-gray-modelpreview.png",
    nombre: "AN515 15.6",
    vendedor: "Falabella",
    precioOferta: 3399,
    precioNormal: 4999,
    calificacion: 5,
    caracteristicas: {
      procesador: "i5",
      tarjetaDeVideo: "GTX 1650",
      discoDuro: true,
      discoDuroSolido: "256gb",
    },
  },
  {
    marca: "HP",
    imagen:
      "https://static.acer.com/up/Resource/Acer/Laptops/Nitro_5/Gallery/20200413/Acer-Nitro-5_AN515-55_gallery_01.png",
    nombre: "HP",
    vendedor: "Falabella",
    precioOferta: 3399,
    precioNormal: 4999,
    calificacion: 5,
    caracteristicas: {
      procesador: "i3",
      tarjetaDeVideo: "GTX 1650",
      discoDuro: false,
      discoDuroSolido: "256gb",
    },
  },
  {
    marca: "apple",
    imagen:
      "https://www.apple.com/v/macbook-pro-14-and-16/b/images/overview/hero/intro__ewz1ro7xs14y_large.jpg",
    nombre: "MacBook Pro",
    vendedor: "Falabella",
    precioOferta: 8399,
    precioNormal: 4999,
    calificacion: 5,
    caracteristicas: {
      procesador: "M1 Pro",
      tarjetaDeVideo: "GTX 1650",
      discoDuro: true,
      discoDuroSolido: "256gb",
    },
  },
  {
    marca: "Lenovo",
    imagen:
      "http://s3.amazonaws.com/imagenes-sellers-mercado-ripley/2021/05/05131939/0013.jpg",
    nombre: "Ide Centre AIO I3",
    vendedor: "Falabella",
    precioOferta: 1599,
    precioNormal: 3599,
    calificacion: 2,
    caracteristicas: {
      procesador: "i3",
      tarjetaDeVideo: "integrada",
      discoDuro: true,
      discoDuroSolido: "1TB",
    },
  },
  {
    marca: "HP ",
    imagen:
      "https://static.acer.com/up/Resource/Acer/Laptops/Nitro_5/Gallery/20200413/Acer-Nitro-5_AN515-55_gallery_01.png",
    nombre: "HP Laptop Gamer",
    vendedor: "Falabella",
    precioOferta: 3399,
    precioNormal: 4999,
    calificacion: 5,
    caracteristicas: {
      procesador: "i3",
      tarjetaDeVideo: "GTX 1650",
      discoDuro: false,
      discoDuroSolido: "256gb",
    },
  },
];

const container = document.querySelector(".container");

// quiero agregar elemenos al container
laptops.map((laptop) => {
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
