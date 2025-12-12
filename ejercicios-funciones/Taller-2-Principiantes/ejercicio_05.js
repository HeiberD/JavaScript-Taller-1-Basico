// Buscar un elemento: 
// Función buscarElemento(array,elemento) que devuelva true si el elemento existe.
// Ejemplo: buscarElemento(["rojo", "azul"], "azul") → true.

const elementos = ["rojo", "azul", "verde", "morado"]

const colorBuscado = prompt("Ingresa el color a buscar")


function buscarElemento(elementos,colorBuscado){
    let colorEncontrado = false
    for(let i = 0; i < elementos.length; i++) {
        if(elementos[i] == colorBuscado) {
        colorEncontrado = true;
        return true;
        }      
    }
    return false;
}

console.log(buscarElemento(elementos,colorBuscado))