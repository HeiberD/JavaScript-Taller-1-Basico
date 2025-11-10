/*Escribe un programa que pida al usuario ingresar un número, luego pide un segundo número e imprime en la consola la suma de los dos números ingresados*/

let readline = require('readline');
let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Escribe un numero: ', (num1) => {
    rl.question('Escribe un segundo numero: ', (num2) => {
        const suma = Number(num1) + Number(num2);
        console.log('La suma de los numeros ingresados es: ' + suma)
    });
});
