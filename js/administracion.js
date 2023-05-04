//#region HTMLS
const tabla = document.getElementById("tabla");
const nombre = document.getElementById("nombre");
const foto = document.getElementById("foto");
const stock = document.getElementById("stock");
const descripcion = document.getElementById("descripcion");
const precio = document.getElementById("precio");
const id = document.getElementById("id");
const save = document.getElementById("save");
const categoria = document.getElementById("categoria")
//#endregion

//#region  Variables
let vid = 0;
let vnombre = "";
let vfoto = "";
let vstock = 0;
let vprecio = 0;
let vstocknegativo = false;
let vdescripcion = "";
let vcategoria = "";
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

categoria.addEventListener("change", function (e) {
  vcategoria = e.target.value;
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
    categoria: {
      nombre : vcategoria,
      id: vcategoria,
      }
  };

  const productos = localStorage.getItem(productos_key);
  const productosObjeto = JSON.parse(productos);
  productosObjeto.push(producto);
  localStorage.setItem(productos_key, JSON.stringify(productosObjeto));
  location.reload()
});
//#endregion

//region productos
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
    <th scope="col" class="w-20 text-center text-light">#</th>
    <th scope="col" class="w-50 text-center text-light">Nombre</th>
    <th scope="col" class="w-25 text-center text-light">Precio Unitario</th>
    <th scope="col" class="w-20 text-center text-light">Stock</th>
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
        <th scope="row" class="text-center text-light">${producto.id}</th> 
        <td class="text-center text-light">${producto.nombre}</td>
        <td class="text-center text-light">${producto.precio_unitario_str}</td>
        <td class="text-center text-light">${producto.stock}</td>
        <td><button class="btn btn-danger mx-5 text-light" id="btn-eliminar" name=${producto.id}>Eliminar</button></td>
      </tr>`;
}
//END region productos

//REGION USUARIOS


const tablaUsers = document.getElementById("tablaUsers")

const usuarios = JSON.parse(localStorage.getItem("users"))

let htmlStringUsers = `<table class="table-light">
<thead>
  <tr>
    <th scope="col" class="w-50 text-light">Nombre</th>
    <th scope="col" class="w-50 text-light">email</th>
    <th scope="col" class="w-50 text-light">contraseña</th>
  </tr>
</thead> <tbody>`;

usuarios.forEach((usuario) => {
  htmlStringUsers += CreateItemUsers(usuario);
});
htmlStringUsers += "</tbody></table>";
tablaUsers.innerHTML = htmlStringUsers;

function CreateItemUsers(usuario) {
  return `
      <tr>
        <td class="w-50 text-light">${usuario.name}</td>
        <td class="w-50 text-light">${usuario.email}</td>
        <td class="w-50 text-light">${usuario.password}</td>
        <td class="w-50 text-light"><button class="btn btn-danger" id="btn-eliminarUsuario" name="${usuario.name}">Eliminar</button></td>
      </tr>
      `;
}

const btnsEliminarUsuario = document.querySelectorAll("#btn-eliminarUsuario");
btnsEliminarUsuario.forEach((btn) => {
  btn.addEventListener("click", (e) => {
  const nuevaLista = usuarios.filter((usuario) => usuario.name != e.target.name
  );
  localStorage.setItem("users", JSON.stringify(nuevaLista))
  location.reload()
})})


//END REGION USUARIOS