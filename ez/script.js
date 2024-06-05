function MostrarNombre(){
    let Nombre = document.getElementById ("NombreUsuario").value;
    let name = document.getElementById("muestranombre");
        name.innerHTML=("Tu nombre es "+Nombre);

    let Apellido = document.getElementById("ApellidoUsuario").value
    let apellido = document.getElementById("muestraapellido");
        apellido.innerHTML=("Tu apellido es "+ Apellido);

    let Edad = document.getElementById("EdadUsuario").value
    let edad = document.getElementById("muestraedad");
        edad.innerHTML=("Tu edad es "+ Edad);

    let DNI = document.getElementById("DNIUsuario").value
    let dni = document.getElementById("muestradni");
        dni.innerHTML=("Tu dni es "+ DNI);

    let TEL = document.getElementById("TelefonoUsuario").value
    let tel = document.getElementById("muestratelefono");
        tel.innerHTML=("Tu Telefono es "+ TEL);

    let Pais = document.getElementById("PaisUsuario").value
    let pais = document.getElementById("muestrapais");
        pais.innerHTML=("Tu pais es "+ Pais);
}


let lista = [];

function Registrar() {
    let nome = document.getElementById ("NombreNuevo").value;
    lista.push(nome);
    console.log(lista)
    let ListaNombres = document.getElementById("ListaNombres");
    ListaNombres.innerHTML=(lista);
}