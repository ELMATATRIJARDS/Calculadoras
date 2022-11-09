//Aparezca una ventana inicial
//alert("¿Deseas iniciar este programa?")

//Aparezca en la pagina web
//document.write("¿Deseas iniciar este programa?")

//Aparezca una versión de prueba
//console.log("¿Deseas iniciar este programa?")

/* 
1 - Solicita un nombre, la edad y muestra por consola el mensaje "Hola ____, tienes ____ años y el año que viene tendrás ____ años"
Realiza el ejercicio con prompt(mensaje) y haz uso de los template strings (plantillas de cadena)
*/

var nombre = prompt("Escriba su nombre: ")
var edad = parseInt(prompt("Escriba su edad: "))

document.write(`Hola ${nombre}, tienes ${edad}, años y el año que viene tendrás ${edad+1} años`)

//Para convetir a números enteros --> parseInt