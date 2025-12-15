// Agregar propiedad a objeto:
// Función agregarPropiedad(objeto, clave, valor) que añada una nueva propiedad a un objeto.
// Ejemplo: AgregarPropiedad({ nombre: "Luis"}, "edad", 25) → { nombre: "Luis",edad: 25 }

    let obj = { nombre: "Luis"};    
    let propiedad = "edad";
    let edad = 25
    


function agregarPropiedad(obj, propiedad, edad){
   obj[propiedad] = edad    
   return obj
}

agregarPropiedad(obj, propiedad, edad)
console.log(obj)