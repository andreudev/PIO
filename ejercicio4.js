// Pide al usuario que ingrese el primer número
let num1 = parseInt(prompt('Ingrese el primer número'));
// Pide al usuario que ingrese el segundo número
let num2 = parseInt(prompt('Ingrese el segundo número'));
// Pide al usuario que ingrese la operación a realizar
let operacion = prompt('Ingrese la operación a realizar (+, -, *, /)');
let resultado;

// Realiza la operación según la operación ingresada
switch (operacion) {
    case '+':
        resultado = num1 + num2;
        break;
    case '-':
        resultado = num1 - num2;
        break;
    case '*':
        resultado = num1 * num2;
        break;
    case '/':
        resultado = num1 / num2;
        break;
    default:
        resultado = 'Operación no válida';
        break;
}

// Muestra el resultado en consola
console.log(`El resultado de la operación es: ${resultado}`);