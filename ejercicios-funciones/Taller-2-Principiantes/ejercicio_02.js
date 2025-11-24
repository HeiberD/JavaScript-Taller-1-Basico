// Encontrar el número mayor:
// Función numeroMayor(array) que retorne el número más grande de un array.
// Ejemplo: numeroMayor([5, 2, 9, 1]) → 9.

const numeros = [8,2,4,10,1,13]

function numeroMayor () {
    let miNumero = numeros[0];

    for (let i = 0; i < numeros.length; i++) {
        if (numeros[ i ] > miNumero) {
            miNumero = numeros[ i ];
    }
}
console.log(miNumero);

}

numeroMayor();