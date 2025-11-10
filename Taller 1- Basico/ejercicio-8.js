let nombres = ['Juan', 'María', 'Pedro', 'Ana', 'Luis'];
let readline = require('readline');
let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question('Ingresa un nombre: ', (nombre1) => { 
    nombres.push(nombre1); // Agrega un nombre al final del arreglo
rl.question('Ingresa otro nombre: ', (nombre2) => { 
    nombres[2] = nombre2;  // Reemplaza un nombre segun indice
    console.log(nombres);      
    rl.close();
    });
});
