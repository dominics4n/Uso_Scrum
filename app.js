document.getElementById('FormSuma').addEventListener('submit',
    function(event){
        event.preventDefault();
        let nombre = document.getElementById('nombre').value;
        let nocuenta = document.getElementById('nocuenta').value;
        let correo = document.getElementById('correo').value;

        
        document.getElementById('resultado').innerText = 'Nombre: '+ nombre + ' No. Cuenta: '+nocuenta + ' correo: ' + correo;
    }
);