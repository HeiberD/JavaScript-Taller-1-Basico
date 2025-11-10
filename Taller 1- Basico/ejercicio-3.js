// Escribe un programa que le pida al usuario un número e imprima si es un múltiplo de 5 o no.
// Si es múltiplo debe imprimir Si, el número x es múltiplo 5, de lo contrario debe imprimir No, el número x no es múltiplo de 5.
// NOTA: Un múltiplo de 5 es aquel que dividido por 5 da por resultado un número entero (sin residuo). Por ejemplo 10, 15, 20, etc. son múltiplos de 5. 11 no es múltiplo de 5 porque quedaría un residuo de 1.


let readline = require('readline');
let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Escribe un numero: ', (num) => {
    if (num % 5 === 0) {
        console.log('Si, el numero ' + num + ' es multiplo de 5'); 
    }
    else if (num % 5 !== 0) {
        console.log('No, el numero ' + num + ' no es multiplo de 5');      
    }   
rl.close();      
});