const openMenu = document.querySelector("#open-menu");
const closeMenu = document.querySelector("#close-menu");
const aside = document.querySelector("aside");

openMenu.addEventListener("click", () => {
    aside.classList.add("aside-visible");
})

closeMenu.addEventListener("click", () => {
    aside.classList.remove("aside-visible");
})


//REGION ADMINISTRADOR

const usuario = JSON.parse(localStorage.getItem("login_success"))
const  admin = document.getElementById ("administracion")
console.log(admin)
console.log(usuario)
if (usuario.name == "admin" && usuario.password == "admin") {
  admin.classList.remove("administracionLink")
} 



//END REGION ADMINISTRADOR