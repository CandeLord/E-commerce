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
    categoria: {
      nombre: "Notebooks",
      id: "notebooks",
    },
  },
  {
    id: 2,
    descripción: `El celular Samsung Galaxy A33, en su color “Awesome Black” con acabado mate, brinda un estilo moderno y elegante que destaca del resto.`,
    precio_unitario: 339000,
    precio_unitario_str: "150.000",
    nombre: "Celular liberado Samsung Galaxy A33",
    fecha_de_creacion: Date.now(),
    stock: 2,
    foto_url:
      "https://images.fravega.com/f300/00b618b11e945da02e5b927b1e9747a6.jpg.webp",
    permite_stock_negativo: false,
    categoria: {
      nombre: "Celulares",
      id: "celulares",
    },
  },
  {
    id: 3,
    descripción: `Mediante sus entradas HDMI podés conectar reproductores de audio y video; consolas de juegos y notebooks. Su gran capacidad de transmisión de datos permite disfrutar de imágenes en alta definición y un sonido de gran fidelidad. `,
    precio_unitario: 21699,
    precio_unitario_str: "210.699",
    nombre: "Televisor Smart 50 pulgadas",
    fecha_de_creacion: Date.now(),
    stock: 2,
    foto_url:
      "https://images.fravega.com/f300/f0ef28b9dea1d9f1e07ce69215c29bdf.jpg.webp",
    permite_stock_negativo: true,
    categoria: {
      nombre: "Televisores",
      id: "televisores",
    },
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


//END carga Inicial de Datos - Semilla

//REGION PINTAR HTML

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
  return `<div class="card mx-3 shadow col-12-sm my-3" style="width: 18rem;">
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

//END REGION PINTAR HTML


//REGION BUSQUEDA

document.getElementById("busqueda").addEventListener("change", (e) => {
  Buscar(e.target.value);
});
function Buscar(value) {
  let productosFiltrados = JSON.parse(productos).filter((producto) =>
    producto.nombre.includes(value)
  );
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
    div_productos.innerHTML = "<h1>No se encontraron productos.</h1>";
  }
}


//END REGION BUSQUEDA


//REGION ADMINISTRADOR

const usuario = JSON.parse(localStorage.getItem("login_success"))
const  admin = document.getElementById ("administracion")
console.log(admin)
console.log(usuario)
if (usuario.name == "admin" && usuario.password == "admin") {
  admin.classList.remove("administracionLink")
} 



//END REGION ADMINISTRADOR