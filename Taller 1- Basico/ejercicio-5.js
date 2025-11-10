let readline = require('readline');
let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Ingresa una frase de dos palabras: ', (frase) => {
    for (let i = 0; i <= 9; i++) {
            console.log(frase);
        }
    rl.close();      
});