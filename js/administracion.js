//#region HTMLS
const tabla = document.getElementById("tabla");
const nombre = document.getElementById("nombre");
const foto = document.getElementById("foto");
const stock = document.getElementById("stock");
const descripcion = document.getElementById("descripcion");
const precio = document.getElementById("precio");
const id = document.getElementById("id");
const save = document.getElementById("save");
//#endregion

//#region  Variables
let vid = 0;
let vnombre = "";
let vfoto = "";
let vstock = 0;
let vprecio = 0;
let vstocknegativo = false;
let vdescripcion = "";
//#endregion

//#region Event Listeners

nombre.addEventListener("change", function (e) {
  vnombre = e.target.value;
});
foto.addEventListener("change", function (e) {
  vfoto = e.target.value;
});
stock.addEventListener("change", function (e) {
  vstock = +e.target.value;
});

descripcion.addEventListener("change", function (e) {
  vdescripcion = e.target.value;
});
precio.addEventListener("change", function (e) {
  vprecio = +e.target.value;
});
id.addEventListener("change", function (e) {
  vid = +e.target.value;
});

save.addEventListener("click", function (e) {
  e.preventDefault();
  //verificar que todos los datos estén correctos
  if (vdescripcion === "") {
    alert("LLenar el campo de la descripción por favor");
    return;
  }
  const producto = {
    id: vid,
    descripción: vdescripcion,
    precio_unitario: vprecio,
    precio_unitario_str: vprecio.toString(),
    nombre: vnombre,
    fecha_de_creacion: Date.now(),
    stock: vstock,
    foto_url: vfoto,
  };

  const productos = localStorage.getItem(productos_key);
  const productosObjeto = JSON.parse(productos);
  productosObjeto.push(producto);
  localStorage.setItem(productos_key, JSON.stringify(productosObjeto));
  location.reload()
});
//#endregion
const productos_key = "productos";
const productos = JSON.parse(localStorage.getItem(productos_key));

let htmlString = `<table class="table-light">
<thead>
  <tr>
    <th scope="col" class="w-20 text-center">#</th>
    <th scope="col" class="w-50 text-center">Nombre</th>
    <th scope="col" class="w-25 text-center">Precio Unitario</th>
    <th scope="col" class="w-20 text-center">Stock</th>
  </tr>
</thead> 
<tbody>`;
productos.forEach((producto) => {
  htmlString += CreateItem(producto);
});

htmlString += "</tbody></table>";

tabla.innerHTML = htmlString;
const btnsEliminar = document.querySelectorAll("#btn-eliminar");

btnsEliminar.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    const lista = localStorage.getItem(productos_key);
    const listaObjeto = JSON.parse(lista);
    const nuevaLista = listaObjeto.filter(
      (producto) => producto.id != +e.target.name
    );
    localStorage.setItem(productos_key, JSON.stringify(nuevaLista));
    location.reload()

  });
});

function CreateItem(producto) {
  return `
      <tr>
        <th scope="row" class="text-center">${producto.id}</th> 
        <td class="text-center">${producto.nombre}</td>
        <td class="text-center">${producto.precio_unitario_str}</td>
        <td class="text-center">${producto.stock}</td>
        <td><button class="btn btn-danger mx-5" id="btn-eliminar" name=${producto.id}>Eliminar</button></td>
      </tr>`;
}
//region usuarios

const tablaUsers = document.getElementById("tablaUsers")

//const usuarios = JSON.parse(localStorage.getItem("usuario"))


const usuarios = JSON.parse(localStorage.getItem("usuarios"))

let htmlStringUsers = `<table class="table-light">
<thead>
  <tr>
    <th scope="col" class="w-50">Nombre</th>
    <th scope="col">contraseña</th>
  </tr>
</thead> <tbody>`;
usuarios.forEach((usuario) => {
  htmlStringUsers += CreateItemUsers(usuario);
});
htmlString += "</tbody></table>";
tablaUsers.innerHTML = htmlStringUsers;

function CreateItemUsers(usuario) {
  return `
      <tr>
        <td>${usuario.nombre}</td>
        <td>${usuario.password}</td>
        <td><button class="btn btn-danger" id="btn-eliminarUsuario" name=${usuario.nombre}>Eliminar</button></td>
      </tr>`;
}


const btnsEliminarUsuarios = document.getElementById("btn-eliminarUsuario");

btnsEliminarUsuarios.addEventListener("click", (e) => {
  const nuevaLista = usuarios.filter((usuario) => usuario.nombre != e.target.name
  );
  localStorage.setItem("usuarios", JSON.stringify(nuevaLista))
  location.reload()
})
