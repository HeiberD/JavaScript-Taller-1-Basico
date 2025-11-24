// Contar elementos pares:
// Función contarPares(array) que cuente cuántos números pares hay.
// Ejemplo: contarPares([3, 8, 2, 10]) → 3.

const numeros = [3, 8, 2, 10]

function contarPares () {
    let cantidadPares = 0;

    for (let i = 0; i < numeros.length; i++) {
       if ((numeros[ i ] % 2 == 0)) {           
          cantidadPares = cantidadPares + 1;
    }
}
console.log(cantidadPares);

}

contarPares();