// Escribe un programa que: Le pida al usuario un número y cree un arreglo de números empezando en el 1 hasta el número que el usuario ingrese (incluyéndolo) 
// Elimine el segundo elemento.
// Recorra e imprima el arreglo.
// Ejemplo:

    //Ingresa un número> 5
    // 1
    // 3
    // 4
    // 5

let miNumero = Number(prompt('Ingrese un numero'));

let miArray = [ ]

for(i = 1; i <= miNumero; i++) {
    miArray.push(i);
    
}

miArray.splice(3,1);

console.log(miArray);
