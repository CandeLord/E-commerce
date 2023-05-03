const MENSAJES = {
    error: "Las contraseñas deben coincidir",
}
const DB = {
    usuario: "usuario"
}


const saveChanges = document.getElementById("btnSave");
const inputCreateMail = document.getElementById("inputcreatemail");
const inputCreatePassword = document.getElementById("createpass");
const inputCreateRePassword = document.getElementById("createrepeatpass");
const lblError = document.querySelector("#lblError");

let createMail = "";
let createPassword ="";
let createRePassword ="";

saveChanges.addEventListener("click", function(e){
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
