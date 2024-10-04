function opcionesDeRecuperación() {
        // Obtiene el valor que se seleccion del desplegable
    const recuperarOpcion = document.getElementById("recuperar-opciones").value; 

// Selecciona la sección del correo
    const emailOpcion = document.getElementById("email-opcion"); 
    
// Selecciona la sección del número de celular
    const numeroOpcion = document.getElementById("numero-opcion"); 
    

    if (recuperarOpcion === "email") { 
        // Si la opción seleccionada es "email", muestra el campo de correo y oculta el de numero
        emailOpcion.style.display = "block"; 
        numeroOpcion.style.display = "none";
    } else { 
        // Si la opción es "numero", muestra el campo de numero y oculta el de correo
        emailOpcion.style.display = "none";
        numeroOpcion.style.display = "block";
    }
}
