/*Escribe un programa que pida al usuario su año de nacimiento y nombre e imprime su edad actual en la consola con la frase Hola X, grandioso! Tienes X años. Asume que el año actual es 2020 y el usuario ingresa 2000, el programa debe imprimir en la consola: Hola Juan, grandioso! Tienes 20 años*/

let readline = require('readline')
let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question('Ingresa tu año de nacimiento: ', (añoNacimiento) => {
    rl.question('Ingresa tu nombre: ', (nombre) => {
        const edadActual = 2020 - añoNacimiento  ; 
        console.log('Hola ' + nombre + ', grandioso. Tienes ' + edadActual + ' anos')    
    rl.close();
    });    
});