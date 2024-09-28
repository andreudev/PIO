// Pide al usuario que ingrese el primer número
let num1 = parseInt(prompt('Ingrese el primer número'));
// Pide al usuario que ingrese el segundo número
let num2 = parseInt(prompt('Ingrese el segundo número'));

// Comprar cual es el mayor

if(num1 > num2){
    console.log(`El número ${num1} es mayor que ${num2}`);
}
else if(num1 < num2){
    console.log(`El número ${num2} es mayor que ${num1}`);
}
else{
    console.log(`Los números son iguales`);
}