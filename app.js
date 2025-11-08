
const form = document.getElementById('FormSuma');
const resultado = document.getElementById('resultado');
const botones = form.getElementsByTagName('button');


const registrarBtn = botones[0];
const descargarBtn = botones[1];

let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
mostrarUsuarios();

form.addEventListener('submit', function(e) {
    e.preventDefault(); 
    const nombre = document.getElementById('nombre').value.trim();
    const nocuenta = document.getElementById('nocuenta').value.trim();
    const correo = document.getElementById('correo').value.trim();


    const nuevoUsuario = {
        nombre: nombre,
        nocuenta: nocuenta,
        correo: correo
    };
    usuarios.push(nuevoUsuario);
    localStorage.setItem('usuarios', JSON.stringify(usuarios));
    mostrarUsuarios();
    form.reset();
});


function mostrarUsuarios() {
    if (usuarios.length === 0) {
        resultado.textContent = "No hay usuarios registrados aún.";
        return;
    }

    
    resultado.textContent = JSON.stringify(usuarios, null, 2);
}

descargarBtn.addEventListener('click', function(e) {
    e.preventDefault(); // Evita que el botón recargue el formulario

    const contenidoJSON = JSON.stringify(usuarios, null, 2);
    const blob = new Blob([contenidoJSON], { type: "application/json" });
    const url = URL.createObjectURL(blob);

    const enlace = document.createElement('a');
    enlace.href = url;
    enlace.download = 'usuarios.json';
    enlace.click();

  
    URL.revokeObjectURL(url);
});
