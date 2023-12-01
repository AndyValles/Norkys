let image_principal_cuadro = document.querySelectorAll(".cuadro_img"); //variable de botones del slider 
let img_responsive = document.querySelectorAll(".img-responsive-plataform"); //variables de las imagenes del slider
let position; //variable de posición de la imagen
let ventana_actual;


setInterval(e => { //función de intercambio de pantalla en tiempo real
    position = img_responsive[1].clientWidth; //la posición se actualizará cada 3 segundos 
    if (!(window.visualViewport.width == ventana_actual)) { //verificicará si la pantalla cambio de anchura, en caso sea verdadero
        for (var b = 0; b < img_responsive.length; b++) { //recorrerá todas la imagenes  y las volverá a la posición de origen
            img_responsive[b].style.transform = "translateX(-" + position * 0 + "px)";
        }
    }
}, 300);

for (var i = 0; i < image_principal_cuadro.length; i++) { //recorrido de los elementos que contengan la clase img-responsive_plataform
    image_principal_cuadro[i].addEventListener("click", e => {
        ventana_actual = window.visualViewport.width; //al presionar los botones del slider indicará cual es la anchura de la pagina
        let pos = e.target.name; //al presionar verificicará que número se almacenara
        for (var b = 0; b < img_responsive.length; b++) { //recorrerá a todos los elementos
            img_responsive[b].style.transform = "translateX(-" + position * pos + "px)"; //cambiara la posición según el número indicado en la variable position y pos
        }
    });
}