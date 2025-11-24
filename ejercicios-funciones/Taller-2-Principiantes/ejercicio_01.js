//1. Sumar elementos de un array: 
// Crea una función sumarArray(array) que reciba un array de números y devuelva la suma.
// Ejemplo: sumarArray([1, 2, 3]) → 6


const nums = [1, 2, 3]

function sumarArray() {
    let miSuma = 0

    for (let i = 0; i < nums.length; i++) {
            miSuma = miSuma + nums[ i ]                
        }
        console.log(miSuma)
}   

sumarArray()



