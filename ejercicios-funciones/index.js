const { time } = require("console");

const atletas = [
    { nombre: 'Laura', disciplina: 'Atletismo', tiempos: [ 12.3, 11.8, 12.1 ] },
    { nombre: 'Carlos', disciplina: 'Natación', tiempos: [ 55.2, 54.9, 56.1, 55.7 ] },    
];

// for (i = 0; i < atletas.length; i++){
//     const totalTiempos = sumarTiempos(atletas[ i ].tiempos);

// }

for (i = 0; i < atletas.length; i++) {
    const tiemposAtletas = atletas[ i ].tiempos;  
    
    let totalTiempos = 0

    for (j = 0; j < tiemposAtletas.length; j++) {
        totalTiempos = totalTiempos + tiemposAtletas[ j ];        
    }
    
    console.log(totalTiempos);
}



