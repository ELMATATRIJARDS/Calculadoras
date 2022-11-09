//Unir el identificador principal con el ID
//Conectamos con un elemento

document.getElementById("boton").addEventListener("click",function(){
    //Obtener los valores --> datos
    var nom = document.getElementById("nombre").value
    var ape = document.getElementById("apellido").value
    var ed = document.getElementById("edad").value

    //Mostrar la información
    //InnerHTML --> Texto que aparece según el ID (añadir)
    document.getElementById("salida").innerHTML = "Hola " + nom + " " + ape + " " + " con edad de " + ed + " ya formas parte del instituto y ganaste tu beca"
    
})



