let readline = require('readline');
let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question('Ingresa una frase: ', (frase) => {
    rl.question('Ingresa un numero: ', (num) => {
        for (let i = 0; i < num; i++) {
            console.log(frase);
        }
    rl.close();      
    });
});