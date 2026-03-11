document.getElementById("formRegistro").addEventListener("submit", function(e){

e.preventDefault();

let nombre = document.getElementById("nombre").value;
let correo = document.getElementById("correo").value;
let password = document.getElementById("password").value;

let usuario = {
nombre: nombre,
correo: correo,
password: password
};

localStorage.setItem("usuario", JSON.stringify(usuario));

alert("Registro exitoso");

window.location.href = "index.html";

});