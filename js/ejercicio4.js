/* 
3 - Solicita un número e imprime todos los números pares e impares desde 1 hasta ese número con el mensaje "es par" o "es impar"
    Ej. si es el número es 5 el resultado será:
        1 - es impar
        2 - es par
        3 - es impar
        4 - es par
        5 - es impar
*/

//Pedir una variable y que se convierta en número
let num = parseInt( prompt("Escribe tu número"));

//Creamos un bucle for --> Las sentencias se ejecuta una cantidad de veces

for(let i=1;i<=num;i++){
    // Comprobamos si es par SI lo dividimos entre 2 será 0
    //El operador módulo (% ) calcula el resto de una operación de división.
    if(i%2 == 0){
        document.write(`${i} - es par \n`)
    }
    else{
        document.write(`${i} - es impar \n`)
    }
}
