//Carga Inicial de Datos - Semilla
const local_storage_llaves = {
  PRODUCTOS: "productos",
  USUARIOS: "usuarios",
};
const productos_base1 = []
fetch("./js/productos.json")
  .then(response => response.json())
  .then(data => {
     productos_base1.push(data);
  })
  .catch(error => console.error(error))

console.log(productos_base1)

window.onload = function () {
  const productos = ObtenerLocalStorage(local_storage_llaves.PRODUCTOS);

  if (!productos) {
    AgregarLocalStorage(local_storage_llaves.PRODUCTOS,) ;
  }
};

function ObtenerLocalStorage(key) {
  const res = localStorage.getItem(key);
  return JSON.parse(res);
}

function AgregarLocalStorage(key, objeto) {
  localStorage.setItem(key, JSON.stringify(objeto));
}
//END CARGA DE DATOS


//REGION PINTAR PRODUCTOS

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
  return `<div class="card mx-3 shadow">
  <img src="${image}" class="card-img-top p-2 img-fluid rounded-start" alt="...">
  <div class="card-body d-flex flex-column justify-content-between">
    <h5 class="card-title text-center">${title}</h5>
    <div class="d-flex justify-content-center">
      <b class="text-center">$${price}</b>
    </div>
    <div class="d-flex justify-content-center align-items-center">
      <a href="${url}" class="btn btn-dark white detalle me-2">Detalle</a>
      <button class="btn btn-primary btn-cart d-none d-md-block" id ="carrito">
        <i class="fas fa-shopping-cart"></i> 
        <span class="cart-text">Agregar al carrito</span>
      </button>
    </div>
    <div class="d-flex justify-content-center d-md-none">
    <i class="fas fa-shopping-cart fa-2x"></i>
  </div>
  </div>
</div>`;
}

function Url(id) {
  return `/productos_id.html?id=${id}`;
}

//END REGION PINTAR PRODUCTOS

//REGION BARRA DE BUSQUEDA


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

//END region barra de busqueda

//REGION USUARIOS

const user = JSON.parse(localStorage.getItem('login_success')) || false
if(!user){
    window.location.href = 'login.html'
}

const logout = document.querySelector('#logout')

logout.addEventListener('click', ()=>{
    alert('¡Hasta pronto!')
    localStorage.removeItem('login_success')
    window.location.href = 'login.html'
})

//END region usuarios
 

//REGION AGREGAR AL CARRITO
const btnCarrito = document.getElementById("carrito")
btnCarrito.addEventListener("click", (e) => {
  return console.log(e.target)
})




//END REGION AGREGAR AL CARRITO