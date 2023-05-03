const MENSAJES = {
    error: "Las contraseñas deben coincidir",
}
const DB = {
    usuario: "usuario"
}
//#region LOGIN
const submit = document.getElementById("submit");
const inputMail = document.getElementById("inputmail");
const inputPassword = document.getElementById("inputpass");
//#endregion LOGIN
let mail = "";
let password ="";

//#region SUBMIT
submit.addEventListener("click", function(e){;
    const usuarioLocalStorage = JSON.parse(localStorage.getItem(DB.usuario));   
    if (usuarioLocalStorage.nombre !== mail || usuarioLocalStorage.password !== password ){
        alert ("Error en las credenciales");
    }else {
        alert ("Bienvenido " + mail);
    }
});
inputMail.addEventListener("change", function(e){
    
    mail = e.target.value;
});
inputPassword.addEventListener("change", function(e){
   password = e.target.value;
})

//#endregion SUBMIT

const usuarios = [
    {
      nombre : "Facundo",
      password : "jsfkdjfl", 
    },
    {
      nombre : "Pierina",
      password : "fsdfsdfsd", 
    },
    {
      nombre : "Cande",
      password : "fsdfsdfsd", 
    },
    {
      nombre : "Pablo",
      password : "fsdfsdfsd", 
    },
  ]
  
  localStorage.setItem("usuarios", JSON.stringify(usuarios))

