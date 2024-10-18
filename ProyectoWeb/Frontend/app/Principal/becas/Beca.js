function completarCurso() {
    const progresoCurso = document.getElementById('progreso-curso');
    progresoCurso.value = 100;
    document.getElementById('examen').style.display = 'block';
}

function solicitarExamen() {
    const nota = Math.floor(Math.random() * 21); // Genera una nota aleatoria de 0 a 20
    document.getElementById('nota').innerText = nota;

    const resultado = document.getElementById('resultado');
    resultado.style.display = 'block';

    if (nota >= 12) { // Si la nota es 12 o más, aprueba
        document.getElementById('solicitar-beca').style.display = 'inline-block';
    }
}

function solicitarBeca() {
    alert("¡Felicidades! Has solicitado tu beca con éxito.");
}
