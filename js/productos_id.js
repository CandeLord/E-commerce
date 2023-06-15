const detalle = document.getElementById("detalle-producto");
let likeClicked = false;

const urlParams = new URLSearchParams(window.location.search);
const paramId = urlParams.get("id");

const local_storage_llaves = {
  PRODUCTOS: "productos",
  USUARIOS: "usuarios",
};

const objeto = JSON.parse(localStorage.getItem(local_storage_llaves.PRODUCTOS));


let elementoFiltrado = objeto.filter(
  (producto) => producto.id === parseInt(paramId)
);

elementoFiltrado = elementoFiltrado[0];

function CreateProduct() {
  return `<div class="container parent">
      <div class="row">
      <div class="col image-parent">
      <img src="${elementoFiltrado.foto_url}"/>
    </div>
    <div class="col">
    </div>
    <div class="col detalle">
       <h5>${elementoFiltrado.nombre}</h5>
       <div class="precio-like">
       <span class="precio">$${elementoFiltrado.precio_unitario_str}</span>
       <span>
       <svg id="like" class="like" stroke="#f24244" fill="white" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 4.435c-1.989-5.399-12-4.597-12 3.568 0 4.068 3.06 9.481 12 14.997 8.94-5.516 12-10.929 12-14.997 0-8.118-10-8.999-12-3.568z"/></svg>
       </span>
       </div>
       <hr>
       <span>Detalles</span>
       <p>${elementoFiltrado.descripción}</p>
       <hr>
       <a href="/productos.html" class="btn btn-orange btn-lg">Ir al comprar!</a>
       <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M13.5 21c-.276 0-.5-.224-.5-.5s.224-.5.5-.5.5.224.5.5-.224.5-.5.5m0-2c-.828 0-1.5.672-1.5 1.5s.672 1.5 1.5 1.5 1.5-.672 1.5-1.5-.672-1.5-1.5-1.5m-6 2c-.276 0-.5-.224-.5-.5s.224-.5.5-.5.5.224.5.5-.224.5-.5.5m0-2c-.828 0-1.5.672-1.5 1.5s.672 1.5 1.5 1.5 1.5-.672 1.5-1.5-.672-1.5-1.5-1.5m16.5-16h-2.964l-3.642 15h-13.321l-4.073-13.003h19.522l.728-2.997h3.75v1zm-22.581 2.997l3.393 11.003h11.794l2.674-11.003h-17.861z"/></svg>
       </div>
      </div>
    </div>`;
}

detalle.innerHTML = CreateProduct();
const like = document.getElementById("like");
like?.addEventListener("click", () => {
  if (!likeClicked) {
    like.style.fill = "#f24244";
    like.style.stroke = "#f24244";
    like.style.transition = "ease 1s fill";
    likeClicked = true;
    } else {
    like.style.fill = "white";
    like.style.transition = "ease 1s fill";
    likeClicked = false;
  }
});

//region favoritos




like.addEventListener("click", () => {

  if (likeClicked) {
    let array = JSON.parse(localStorage.getItem("productos favoritos")) || [];
    let id = parseInt(new URLSearchParams(window.location.search).get("id"));  
    let objetoFavorito = objeto.find((objeto) =>{
    return objeto.id == id})
    
    array.push(objetoFavorito)
    
    localStorage.setItem("productos favoritos", JSON.stringify(array))
  } else {
    array = JSON.parse(localStorage.getItem("productos favoritos"))
    let nuevoArray = array.filter(objeto => objeto.id != 1);

    array.splice(0, array.length, ...nuevoArray);

    localStorage.setItem("productos favoritos", JSON.stringify(array))

  }
})







