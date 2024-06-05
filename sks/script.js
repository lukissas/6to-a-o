function guardarDatos() {
    
    let persona={
        nombre: document.getElementById("nombre").value, 
        apellido: document.getElementById("apellido").value,
        edad: document.getElementById("edad").value,
        saludar: function(){
            return "Hola, soy " + this.nombre
        }
    };
   let h2 = document.getElementById("mostrarDatos")
   h2.innerHTML = "nombre: " + persona.nombre + "<br>" + "apellido: " + persona.apellido + "<br>" + "edad: " + persona.edad;
}

