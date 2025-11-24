// Completa el siguiente programa para imprimir los números que sean mayores a 10.
// const nums = [1, 23, 5, 8, 40, 12, 2, 67, 24, 9, 39]
   
// El resultado debería ser el siguiente:
// 23
// 40
// 12
// 67
// 24
// 39

const numeros = [1, 23, 5, 8, 40, 12, 2, 67, 24, 9, 39]

let numerosMayores = [ ];
let numeroPares = [ ];

for(let i = 0; i < numeros.length; i++) { 
    if ((numeros[i] > 10)) {
        numerosMayores.push(numeros[i]);
    }

    if (numeros[i] % 2 == 0) {
        numeroPares.push(numeros[i]);
    }
    
}

console.log(numerosMayores)
console.log(numeroPares)

