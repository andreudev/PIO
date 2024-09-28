// Ejercicio 1
// Pide al usuario que ingrese su nombre
let nombre = prompt('Ingrese su nombre');
// String para mostrar en consola
const msg = `Hola ${nombre},  Bienvenido al taller de JavaScript"`; 
// Muestra el mensaje en consola
console.log(msg); 


// Ejercicio 2
// Pide al usuario que ingrese su edad y la convierte a entero
let edad = parseInt(prompt('Ingrese su edad')); 
// String para mostrar en consola
const msg2 = `Tu edad es ${edad}`; 
// Muestra el mensaje en consola
console.log(msg2); 



// Ejercicio 3: Uso del if y explicación de la comparación
// Si la edad es mayor o igual a 18
if(edad >= 18){
    // Muestra el mensaje en consola
    console.log('Eres mayor de edad');
}