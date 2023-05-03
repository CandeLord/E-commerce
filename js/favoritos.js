const listaFavoritos = document.getElementById("listaFavoritos")

const productos_favoritos = JSON.parse(localStorage.getItem("productos favoritos"))


if (productos_favoritos) {
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
    listaFavoritos.innerHTML = "<h1>NO HAY PRODUCTOS  </h1>";
  }
  
  function createC(image, title, url, price, id) {
    return `<div class="card mx-3 shadow" style="width: 18rem;">
      <img src="${image}" class="card-img-top p-2" alt="...">
      <div class="card-body">
        <h5 class="card-title">${title}</h5>
        <span><b>$${price}</b><span>
        <hr>
        <a href="${url}" class="btn btn-primary white detalle">Ir al producto</a>
        <button class="btn btn-danger my-2" id="btn-eliminar" name=${id}>Eliminar</button>
      </div>
    </div>`;
  }
  
  function Url(id) {
    return `/productos_id.html?id=${id}`;
  }
  
const btnsEliminar = document.getElementById("btn-eliminar");

btnsEliminar.addEventListener("click", function (e) {;
    const nuevaLista = productos_favoritos.filter((producto) => producto.id != e.target.name);
    localStorage.setItem("productos favoritos", JSON.stringify(nuevaLista));
    location.reload()
});