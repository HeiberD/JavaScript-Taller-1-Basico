// Escribe un programa que le pida al usuario ingresar un número.

// Si el número es múltiplo de 3 debe imprimir en la consola bing.
// Si el número es múltiplo de 5 debe imprimir en la consola bong.
// Si el número es múltiplo tanto de 3 como de 5 debe imprimir en la consola bingbong.
// Si no cumple ninguna de las condiciones anteriores debe imprimir el mismo número.


let readline = require('readline');
let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
}); 

rl.question('Ingresa un numero: ', (num) => {
    if (num % 3 === 0) {
        console.log('Si, el numero ' + num + ' es multiplo de 3');
    }
    if (num % 5 === 0) {
        console.log('Si, el numero ' + num + ' es multiplo de 5');      
    }
    if (num % 3 === 0 && num % 5 === 0) {
        console.log('Si, el numero ' + num + ' es multiplo de 3 y 5');
    }   
    else {
        console.log(num);      
    }    
rl.close();      
});