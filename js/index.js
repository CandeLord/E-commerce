//Carga Inicial de Datos - Semilla
const productos_base = [
  {
    id: 1, 
    descripción: `Pantalla de gran impacto.
      Con un diseño de 14.1 pulgadas con la notebook Enova puedes disfrutar de los contenidos con resolución de 1366x768, sin perderte ningún detalle y visualizarlo con colores más vivos y definidos.`,
    precio_unitario: 85000,
    precio_unitario_str: "85.000",
    nombre:
      "NOTEBOOK INTEL CELERON N3350 CON 4GB DE RAM NB142A-W10H DE 14,1 PULGADAS",
    fecha_de_creacion: Date.now(),
    stock: 5,
    foto_url:
      "https://www.megatone.net/Images/Articulos/zoom2x/200/NOT1464ENO.jpg",
    permite_stock_negativo: false,
  },
  {
    id: 2,
    descripción: `Con tu consola PlayStation 5 tendrás entretenimiento asegurado todos los días. Su tecnología fue creada para poner nuevos retos tanto a jugadores principiantes como expertos.`,
    precio_unitario: 339000,
    precio_unitario_str: "339.000",
    nombre: "Sony PlayStation 5 825GB Digital Edition color blanco y negro",
    fecha_de_creacion: Date.now(),
    stock: 2,
    foto_url:
      "https://http2.mlstatic.com/D_NQ_NP_791396-MLA47058527002_082021-O.webp",
    permite_stock_negativo: false,
  },
  {
    id: 3,
    descripción: `Personaliza tu iluminación, crea macros y ajusta el modo de juego con el software HyperX NGENUITY. Este programa potente pero fácil de usar te permite configurar la iluminación por tecla, tener efectos de iluminación deslumbrantes y agregar decenas de otros toques personalizados a tus productos compatibles con NGENUITY.`,
    precio_unitario: 21699,
    precio_unitario_str: "21.699",
    nombre: "Teclado Mecánico Hyperx Alloy Origins Core - Aqua",
    fecha_de_creacion: Date.now(),
    stock: 2,
    foto_url:
      "https://images.fravega.com/f300/056207e2bd648c0e396e4579f301ec22.jpg.webp",
    permite_stock_negativo: true,
  },
];

const local_storage_llaves = {
  PRODUCTOS: "productos",
  USUARIOS: "usuarios",
};

window.onload = function () {
  const productos = ObtenerLocalStorage(local_storage_llaves.PRODUCTOS);

  if (!productos) {
    AgregarLocalStorage(local_storage_llaves.PRODUCTOS, productos_base);
  }
};

function ObtenerLocalStorage(key) {
  const res = localStorage.getItem(key);
  return JSON.parse(res);
}

function AgregarLocalStorage(key, objeto) {
  localStorage.setItem(key, JSON.stringify(objeto));
}


const div_productos = document.querySelector("#lista");


const productos = localStorage.getItem(local_storage_llaves.PRODUCTOS);

if (productos) {
  const lista = JSON.parse(productos);
  let htmlString = "";
  lista.forEach((producto) => {
    htmlString += CreateCards(
      producto.foto_url,
      producto.nombre,
      Url(producto.id),
      producto.precio_unitario_str
    );
  });
  div_productos.innerHTML = htmlString;
} else {
  div_productos.innerHTML = "<h1>NO HAY PRODUCTOS  </h1>";
}

function CreateCards(image, title, url, price) {
  return `<div class="card mx-3 shadow" style="width: 18rem;">
    <img src="${image}" class="card-img-top p-2 img-fluid" alt="...">
    <div class="card-body">
      <h5 class="card-title">${title}</h5>
      <span>
      <b class="">$${price}</b>
      <span>
      <hr>
      <a href="${url}" class="btn btn-dark white detalle">Detalle</a>
    </div>
  </div>`;
}

function Url(id) {
  return `/productos_id.html?id=${id}`;
}





document.getElementById("busqueda").addEventListener("change", (e) => {
  Buscar(e.target.value.toUpperCase());
});
function Buscar(value){
  let productosFiltrados = JSON.parse(productos).filter(producto => producto.nombre.includes(value)); 
  if (productosFiltrados) {
    const lista = productosFiltrados;
    let htmlString = "";
    lista.forEach((producto) => {
      htmlString += CreateCards(
        producto.foto_url,
        producto.nombre,
        Url(producto.id),
        producto.precio_unitario_str
      );
    });
    div_productos.innerHTML = htmlString;
  } else {
    div_productos.innerHTML = "<h1>No hay productos.</h1>";
  }
}; 



 