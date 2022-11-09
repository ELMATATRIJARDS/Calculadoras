// Pide la edad y si es mayor de 18 años indica que ya puede conducir.

//Pediremos por el teclado la edad
let _edad = prompt("Escriba su edad: ");

//Comprobaremos que lo introducido es un número
if(Number(_edad) == edad){
    //SI es mayor de 18
    if(edad>= 18){
        //Imprima en el html
        //document.write("Puedes sacar tu licencia y conducir")
        document.write(`Tienes ${edad} años y puedes sacar tu licencia y conducir`);
    }
else{
    alert("Has puesto una edad no válida");
}
}







