let readline = require('readline');
let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
}); 

rl.question('Ingresa un numero: ', (num) => {   
    rl.question('Ingresa un segundo numero: ', (num2) => {
        for (let i = Number(num); i <= Number(num2); i++) {
            console.log(i);
        }
    rl.close();      
    });
});