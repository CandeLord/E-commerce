const listaFavoritos = document.getElementById("listaFavoritos")

const productos_favoritos = JSON.parse(localStorage.getItem("productos favoritos"))

if (productos_favoritos.length > 0) {
    let htmlString = "";
    productos_favoritos.forEach((producto) => {
      htmlString += createC(
        producto.foto_url,
        producto.nombre,
        Url(producto.id),
        producto.precio_unitario_str,
        producto.id
      );
    });
    listaFavoritos.innerHTML = htmlString;
  } else {
    listaFavoritos.innerHTML =`<div class="error-container">
    <h1>404</h1>
    <p>Oops! La página que buscas no se encuentra disponible.</p>
    <a href="/index.html" class="btn btn-lg">Volver al inicio</a>
  </div>`
  }
  
  function createC(image, title, url, price, id) {
    return `<div class="card mx-3" style="width: 18rem;">
    <img src="${image}" class="card-img-top p-2" alt="...">
    <div class="card-body">
      <h5 class="card-title">${title}</h5>
      <span class="card-price"><b>$${price}</b></span>
      <hr>
      <div class="card-buttons">
        <a href="${url}" class="btn btn-primary white detalle">Ir al producto</a>
        <button class="btn btn-danger my-2" id="btn-eliminarFav" name=${id}>Eliminar</button>
      </div>
    </div>
  </div>`;
  }
  
  function Url(id) {
    return `/productos_id.html?id=${id}`;
  }
  
const btnsEliminarFav = document.querySelectorAll("#btn-eliminarFav");

btnsEliminarFav.forEach((btn) => {
  btn.addEventListener("click", function (e) {;
    const nuevaLista = productos_favoritos.filter((producto) => producto.id != e.target.name);
    localStorage.setItem("productos favoritos", JSON.stringify(nuevaLista));
    location.reload()
})});


//REGION ADMINISTRADOR

const usuario = JSON.parse(localStorage.getItem("login_success"))
const  admin = document.getElementById ("administracion")
console.log(admin)
console.log(usuario)
if (usuario.name == "admin" && usuario.password == "admin") {
  admin.classList.remove("administracionLink")
} 



//END REGION ADMINISTRADOR