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
submit.addEventListener("click", function(e){
    e.preventDefault();
    const usuarioLocalStorage = JSON.parse(localStorage.getItem(DB.usuario));
    console.log(mail);
    console.log(password);
    console.log(usuarioLocalStorage);
    
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

//#region CREACIÓN USUARIO
const saveChanges = document.getElementById("btnSave");
const inputCreateMail = document.getElementById("inputcreatemail");
const inputCreatePassword = document.getElementById("createpass");
const inputCreateRePassword = document.getElementById("createrepeatpass");
const lblError = document.querySelector("#lblError");

let createMail = "";
let createPassword ="";
let createRePassword ="";

saveChanges.addEventListener("click", function(e){
    e.preventDefault();
    if(createRePassword !== createPassword) {
        lblError.innerHTML = MENSAJES.error ;
        lblError.style.display = "block";
        setTimeout( () => {
            lblError.style.display = "none";
        }, 2000);
    }else {
        localStorage.setItem(DB.usuario, JSON.stringify({
            nombre: createMail,
            password: createPassword,
        }))
    }
    
});
inputCreateMail.addEventListener("change", function(e){
    createMail = e.target.value;
 })
inputCreatePassword.addEventListener("change", function(e){
    createPassword = e.target.value;
});
inputCreateRePassword.addEventListener("change", function(e){
   createRePassword = e.target.value;
})
//#endregion CREACIÓN USUARIO