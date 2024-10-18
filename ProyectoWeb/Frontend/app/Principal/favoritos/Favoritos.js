function alternarSeccion(id) {
    const seccion = document.getElementById(id);
    const icono = seccion.previousElementSibling.querySelector('.icono');
    seccion.classList.toggle('mostrar');
    icono.classList.toggle('mostrar');
}
