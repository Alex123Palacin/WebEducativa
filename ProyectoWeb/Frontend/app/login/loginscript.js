// Se esta llamando al id "btn__iniciar-sesion" para que realice el evento "iniciarSesion" haciendo un clic
document.getElementById("btn__iniciar-sesion").addEventListener("click", iniciarSesion);
// Se esta llamando al id "btn__registrarse" para que realice el evento "register" haciendo un clic
document.getElementById("btn__registrarse").addEventListener("click", register);
//Se esta creando un evento donde "resize" trata de un cambio de dimensiones para que cambie el ancho
//de la caja trasera y el formulario
window.addEventListener("resize", anchoPage);

// Se esta creando una variable, utilizando el Modelo de objeto de documento (DOM) 
// seleccionando el id .formulario__login.
var formulario_login = document.querySelector(".formulario__login");

// Se esta creando una variable, utilizando el Modelo de objeto de documento (DOM) 
// seleccionando el id formulario__register.
var formulario_register = document.querySelector(".formulario__register");

// Se esta creando una variable, utilizando el Modelo de objeto de documento (DOM) 
// seleccionando el id contenedor__login-register.
var contenedor_login_register = document.querySelector(".contenedor__login-register");

// Se esta creando una variable, utilizando el Modelo de objeto de documento (DOM) 
// seleccionando el id caja__trasera-login.
var caja_trasera_login = document.querySelector(".caja__trasera-login");

// Se esta creando una variable, utilizando el Modelo de objeto de documento (DOM) 
// seleccionando el id caja__trasera-register.
var caja_trasera_register = document.querySelector(".caja__trasera-register");

//FUNCIONES

function anchoPage(){

    if (window.innerWidth > 850){
        caja_trasera_register.style.display = "block"; // Muestra la caja trasera de registro.
        caja_trasera_login.style.display = "block"; // Muestra la caja trasera de login.
    }else{
        // Si el ancho es menor a 850 píxeles, se ajustan las vistas para dispositivos móviles.
        caja_trasera_register.style.display = "block"; // Muestra la caja trasera de registro.
        caja_trasera_register.style.opacity = "1"; // Ajusta la opacidad de la caja trasera de registro a 1.
        caja_trasera_login.style.display = "none"; // Oculta la caja trasera de login.
        formulario_login.style.display = "block";  // Muestra el formulario de login.
        contenedor_login_register.style.left = "0px"; // Mueve el contenedor a la posición izquierda de 0 píxeles.
        formulario_register.style.display = "none"; // Oculta el formulario de registro.
    }
}

anchoPage();


    function iniciarSesion(){
        // Si el ancho de la ventana es mayor a 850 píxeles, ajusta la vista para pantallas grandes.
        if (window.innerWidth > 850){
            formulario_login.style.display = "block"; // Muestra el formulario de login.
            contenedor_login_register.style.left = "10px"; // Mueve el contenedor hacia la izquierda 10 píxeles.
            formulario_register.style.display = "none"; // Oculta el formulario de registro.
            caja_trasera_register.style.opacity = "1"; // Ajusta la opacidad de la caja trasera de registro a 1 (haciéndola visible).
            caja_trasera_login.style.opacity = "0"; // Ajusta la opacidad de la caja trasera de login a 0 (haciéndola invisible).
        }else{
            // Si el ancho es menor a 850 píxeles, ajusta la vista para dispositivos móviles.
            formulario_login.style.display = "block"; // Muestra el formulario de login.
            contenedor_login_register.style.left = "0px"; // Coloca el contenedor en el extremo izquierdo.
            formulario_register.style.display = "none"; // Oculta el formulario de registro.
            caja_trasera_register.style.display = "block"; // Muestra la caja trasera de registro.
            caja_trasera_login.style.display = "none"; // Oculta la caja trasera de login.
        }
    }

    function register(){
        // Si el ancho de la ventana es mayor a 850 píxeles, ajusta la vista para pantallas grandes.
        if (window.innerWidth > 850){
            formulario_register.style.display = "block"; // Muestra el formulario de registro.
            contenedor_login_register.style.left = "410px"; // Mueve el contenedor 410 píxeles a la izquierda.
            formulario_login.style.display = "none"; // Oculta el formulario de login.
            // Ajusta la opacidad de la caja trasera de registro a 0 (haciéndola invisible).
            caja_trasera_register.style.opacity = "0";
            // Ajusta la opacidad de la caja trasera de login a 1 (haciéndola visible).
            caja_trasera_login.style.opacity = "1"; 
        
        // Si el ancho es menor a 850 píxeles, ajusta la vista para dispositivos móviles.
        }else{
            formulario_register.style.display = "block"; // Muestra el formulario de registro.
            contenedor_login_register.style.left = "0px"; // Coloca el contenedor en el extremo izquierdo.
            formulario_login.style.display = "none"; // Oculta el formulario de login.
            caja_trasera_register.style.display = "none"; // Oculta la caja trasera de registro.
            caja_trasera_login.style.display = "block"; // Muestra la caja trasera de login.
            // Ajusta la opacidad de la caja trasera de login a 1 (haciéndola visible).
            caja_trasera_login.style.opacity = "1"; 
        }
}