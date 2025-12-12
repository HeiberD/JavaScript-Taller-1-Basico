// Invertir un array: Función invertirArray(array) que retorne un nuevo array invertido.
// Ejemplo: invertirArray(["a", "b", "c"]) → ["c", "b", "a"].

const miArray = [ "a", "b" ,"c" ]

function invertirArray(array) {
    let arrayInvertido = []

    for (let i = miArray.length - 1; i >= 0; i--) {        
        arrayInvertido.push(array[i]);        
    }
    
    return arrayInvertido;
}

console.log(invertirArray(miArray));