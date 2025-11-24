//Crea un arreglo llamado mayoresYPares que contenga solo los números:
  // mayores a 10 
  // y pares al mismo tiempo 
  // Sin usar && en una sola condición.

const numeros = [1, 23, 5, 8, 40, 12, 2, 67, 24, 9, 39]

numerosMayores = [];
numerosPares = [];

for(let i = 0; i < numeros.length; i++) {
    if((numeros[i] > 10))
    numerosMayores.push(numeros[i])    
} 

for(let j = 0; j < numerosMayores.length; j++) {
    if((numerosMayores[j] % 2 == 0)) {
        numerosPares.push(numerosMayores[j])
    }
}

console.log(numerosPares)
