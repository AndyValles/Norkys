let hamburger_menu = document.querySelector(".icon-hamburger"); //variable del botón del menú
let menu = document.querySelector(".menu"); //variable del elemento menú(ul) 
let entradas = document.querySelector(".entrada_menu"); //variable de los títulos del menú(btn)
let subentradas = document.querySelector(".content_submenu"); //variables de los subtítulos del menú(btn)
let search = document.getElementById("search"); //variable del cuadro de búsqueda(search)
let buscar = document.querySelector(".content_search"); //variable del contenedor de búsqueda
let bus = document.querySelector(".search"); //variable de botón de búsqueda
let salir = document.querySelector(".salir");
let usuario = document.getElementById("usuario"); //variable del botón de usuario
let btn__view_usuario = document.querySelector(".btn--scroll_custom"); //variable de salida de usuario
let btn_footer = document.querySelectorAll(".footer_btn"); //variable de botones del footer


hamburger_menu.addEventListener("click", e => { // función de aparecer el menú(celular)
    hamburger_menu.classList.toggle("icon-hamburger_back"); //el icono cambiara de color y obtendrá una pequeña transición
    hamburger_menu.classList.toggle("fa-times"); //cambia el icono por una x
    menu.classList.toggle("menu_start"); //mostrara el menú
    menu.style.transition = "all 3s"; //pequeña transición de 3segundos
});

entradas.addEventListener("click", e => { //al presionar los títulos se mostraran los subtítulos(solo para categorías)
    subentradas.classList.toggle("submenu-activate");
});

search.addEventListener("click", e => { //al presionar el icono de la lupita 
    buscar.classList.toggle("contenido_search"); //se mostrara el contenedor de búsqueda
    bus.classList.toggle("search_head");
});

salir.addEventListener("click", e => {
    buscar.classList.toggle("contenido_search");
});

usuario.addEventListener("click", e => { //al presionar el icono del usuario se mostrara una ventana emergente donde puedes ingresar una cuenta
    document.querySelector(".user--container").classList.add("user__view");
});
btn__view_usuario.addEventListener("click", e => { // al presiona saldrá de la ventana de usuario
    document.querySelector(".user--container").classList.remove("user__view");
});

for (i = 0; i < btn_footer.length; i++) { //recorrido de los elementos del footer
    btn_footer[i].addEventListener("click", e => { //elementos recorridos del footer
        let pos = Number(e.target.name); //variable para obtener el número del elemento

        document.querySelector(".contentVentanaE ").classList.add("visible-modal"); //mostrara el contenido de las ventanas emergentes
        switch (pos) { //analiza la variable para indicar que número de caso debe hacer ver 
            case 1:
                document.querySelector(".Local").classList.add("visible-modal"); //1. se vizualizará los locales
                break;
            case 2:
                document.querySelector(".mapa").classList.add("visible-modal"); //2. se vizualizará el mapa de reparto
                break;
            case 3:
                document.querySelector(".Termino-condiciones").classList.add("visible-modal"); //3. se vizualizará los términos y condiciones
                break;
            case 4:
                document.querySelector(".politica").classList.add("visible-modal"); //4. se vizualizará las políticas de promociones
                break;
            case 5:
                document.querySelector(".libro_r").classList.add("visible-modal"); //5. se vizualizará los libros de reclamaciones
                break;
        }

    });
}

document.querySelector("#salir").addEventListener("click", e => { // función de sacar a todos las ventanas emergentes
    document.querySelector(".contentVentanaE ").classList.remove("visible-modal");
    document.querySelector("#salir").classList.remove("visible-modal");
    document.querySelector(".Local").classList.remove("visible-modal");
    document.querySelector(".mapa").classList.remove("visible-modal");
    document.querySelector(".libro_r").classList.remove("visible-modal");
    document.querySelector(".politica").classList.remove("visible-modal");
    document.querySelector(".Termino-condiciones").classList.remove("visible-modal");
});