document.getElementById('mostrarVideo').addEventListener('click', function() {
    var videoContainer = document.getElementById('videoContainer');
    var video = document.getElementById('video');
    var botonMostrar = document.getElementById('mostrarVideo');
    
    // Mostrar el contenedor del video
    videoContainer.style.display = 'block';

    // Reproducir el video
    video.play();

    // Ocultar el botón
    botonMostrar.style.display = 'none';
});
document.getElementById('mostrarVideo').addEventListener('click', function() {
    var imagenIzquierda = document.getElementById('imagenIzquierda');
    var imagenDerecha = document.getElementById('imagenDerecha');
    var videoContainer = document.getElementById('videoContainer');

    // Ocultar las imágenes
    imagenIzquierda.style.display = 'none';
    imagenDerecha.style.display = 'none';

    // Mostrar el contenedor del video
    videoContainer.style.display = 'block';
});

