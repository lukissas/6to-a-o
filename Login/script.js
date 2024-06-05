document.addEventListener("DOMContentLoaded", function() {
    const Registro = document.getElementById("Registro");
    const InicioSesion = document.getElementById("InicioSesion");
    const mensajeDiv = document.getElementById("mensaje");
    
    Registro.addEventListener("submit", function(event) {
        event.preventDefault();
        const usuario = document.getElementById("usuario").value;
        const contraseña = document.getElementById("contraseña").value;
        
        localStorage.setItem("usuario", usuario);
        localStorage.setItem("contraseña", contraseña);
        
        mensajeDiv.textContent = "¡Registro exitoso!";
        formularioRegistro.reset();
    });
    
    InicioSesion.addEventListener("submit", function(event) {
        event.preventDefault();
        const usuarioIngresado = document.getElementById("usuarioInicio").value;
        const contraseñaIngresada = document.getElementById("contraseñaInicio").value;
        const usuarioAlmacenado = localStorage.getItem("usuario");
        const contraseñaAlmacenada = localStorage.getItem("contraseña");
        
        if (usuarioIngresado === usuarioAlmacenado && contraseñaIngresada === contraseñaAlmacenada) {
            mensajeDiv.textContent = "¡Inicio de sesión exitoso!";
        } else {
            mensajeDiv.textContent = "Usuario o contraseña incorrectos.";
        }
        formularioInicioSesion.reset();
    });
});

let falta = document.getElementById("faltan")
   falta.innerHTML = "faltan 8 caracteres";


