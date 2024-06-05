function MostrarNombre() {
    let textos = document.getElementsByTagName("input")
    let pr = document.getElementsByTagName("p")
    
    for (var i = 0; i < pr.length; i++){
        pr[i].innerHTML = textos[i].value
    }
}

