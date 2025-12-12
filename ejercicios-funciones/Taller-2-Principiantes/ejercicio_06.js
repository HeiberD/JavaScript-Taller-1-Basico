// Calcular promedio de notas:
// Función promedioNotas(estudiante) que reciba un objeto estudiante con propiedad notas (array) y devuelva el promedio.
// Ejemplo: promedioNotas({ nombre: "Ana", notas: [80, 90, 70] }) → 80

const estudiante = [{nombre: "Ana", notas: [80, 90, 70]}]

let sumaTotal = 0
 
function sumarNotas(){    
    
    for(let i = 0; i < estudiante.length; i++){  
        const notas = estudiante[ i ].notas     
                                       
        for(let j = 0; j < notas.length; j++){            
            sumaTotal = sumaTotal + notas[j]             
        }    
    }
    console.log(sumaTotal)

}

sumarNotas()