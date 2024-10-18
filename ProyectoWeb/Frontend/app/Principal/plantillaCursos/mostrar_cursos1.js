fetch('/ProyectoWeb/Frontend/app/Principal/plantillaCursos/plantilla_curso.html')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok: ' + response.statusText);
        }
        return response.text();
    })
    .then(data => {
        document.getElementById('contenido-aside').innerHTML = data;
    })
    .catch(error => {
        console.error('Hubo un problema con la petición Fetch:', error);
    });
console.log("aaa")