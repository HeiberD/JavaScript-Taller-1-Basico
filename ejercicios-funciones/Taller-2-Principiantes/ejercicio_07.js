// Filtrar estudiantes aprobados: 
// Función aprobados(listaEstudiantes) que reciba un array de objetos (cada uno con nombre y nota) y devuelva un nuevo array con los que tengan nota >= 60.

const listaEstudiantes =   [{nombre: "Heiber", nota: 60}, 
                            {nombre: "Maria", nota: 70}, 
                            {nombre: "Jose", nota: 25 }
                            ]

function estudiantes(){
    const estudiantesAprobados = [];
    
    
        for(let i = 0; i < listaEstudiantes.length; i++){
            if(listaEstudiantes[i].nota >= 60){
                estudiantesAprobados.push(listaEstudiantes[i]);                  
            }
           
    }
    console.log(estudiantesAprobados);    
    return estudiantesAprobados; 
    
}

estudiantes();




