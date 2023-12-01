var seleccion = document.getElementById("selec"); /*variable de envió de formulario de gmail o celular */
var envio = document.getElementById("enviar"); /*variable de envió de formulario de validación*/

seleccion.addEventListener("click", e => { /*función de cambio a validación*/
    document.getElementById("valida").style.display = "visible";
    document.getElementById("cambia").style.display = "none";
    document.getElementById("restablece").style.display = "none";
});
envio.addEventListener("click", e => { //función de cambio a restablecer contraseña
    document.getElementById("restablece").style.display = "visible";
    document.getElementById("valida").style.display = "none";
    document.getElementById("cambia").style.display = "none";
});