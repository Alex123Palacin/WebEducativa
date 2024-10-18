function actualizarPrecio() {
    const radios = document.getElementsByName('curso');
    let precio = 0;
    
    for (let i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            precio = radios[i].value;
            break;
        }
    }
    
    document.getElementById('precio').innerText = precio;
}

function comprar() {
    const precio = document.getElementById('precio').innerText;
    if (precio > 0) {
        alert(`Compra realizada con éxito. Total pagado: $${precio}`);
    } else {
        alert("Por favor, selecciona un curso antes de comprar.");
    }
}
