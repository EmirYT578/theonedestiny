// Datos simulados de usuarios (en un entorno real, usarías una base de datos)
var users = [];

function login() {
    var username = document.getElementById('loginUsername').value;
    var password = document.getElementById('loginPassword').value;

    // Verificar las credenciales
    var user = users.find(u => u.username === username && u.password === password);

    if (user) {
        document.getElementById('message').innerText = 'Inicio de sesión exitoso';
        document.getElementById('message').style.color = 'green';
    } else {
        document.getElementById('message').innerText = 'Credenciales incorrectas. Por favor, intente de nuevo.';
        document.getElementById('message').style.color = 'red';
    }
}

function register() {
    var username = document.getElementById('registerUsername').value;
    var password = document.getElementById('registerPassword').value;

    // Verificar si el nombre de usuario ya está en uso
    var userExists = users.some(u => u.username === username);

    if (userExists) {
        document.getElementById('message').innerText = 'El nombre de usuario ya está en uso. Por favor, elija otro.';
        document.getElementById('message').style.color = 'red';
    } else {
        // Crear nuevo usuario y agregarlo a la lista
        users.push({ username: username, password: password });

        document.getElementById('message').innerText = 'Registro exitoso';
        document.getElementById('message').style.color = 'green';
    }
}
