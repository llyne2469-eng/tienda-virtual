document.getElementById("formLogin").addEventListener("submit", function(e){

e.preventDefault();

let correo = document.getElementById("correoLogin").value;
let password = document.getElementById("passwordLogin").value;

let usuarioGuardado = JSON.parse(localStorage.getItem("usuario"));

if(usuarioGuardado == null){

alert("No existe usuario registrado");
return;

}

if(correo === usuarioGuardado.correo && password === usuarioGuardado.password){

alert("Bienvenido " + usuarioGuardado.nombre);

window.location.href = "tienda.html";

}

else{

alert("Correo o contraseña incorrectos");

}

});