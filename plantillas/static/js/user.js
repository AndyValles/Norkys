var configuracion = document.querySelector(".contain--configuracion"); //variable de la sección configuración
var btn_confi = document.querySelector(".btn-confi"); //variable del botón configuración para iniciar el cambio 
var salir = document.querySelector(".confi-sal");
var imagen = document.querySelector(".file"); //variable del input de archivos
var guardar = document.querySelector(".guardar"); //variable del botón de guardado

btn_confi.addEventListener("click", e => { //función de iniciar la ventana emergente
    configuracion.classList.toggle("visibility--configuracion");
});

salir.addEventListener("click", e => { //función de cerrar la ventana emergente
    configuracion.classList.toggle("visibility--configuracion");
});

guardar.addEventListener("click", e => { // función de cambio de fondo del usuario
    let f = imagen.files; //variable para obtener la dirección url del archivo del input 
    for (let file of f) { //recorre toda la información del archivo
        document.querySelector(".total").style.background = "url(" + URL.createObjectURL(file) + ") center fixed"; //busca la clase del body y lo incorpora como fondo,
        document.querySelector(".total").style.backgroundsize = "cover"; // la información recorrida lo convierte en una url legible para el style background
    }
    configuracion.classList.toggle("visibility--configuracion"); // después de agregar el fondo se cerrara la ventana emergente

});