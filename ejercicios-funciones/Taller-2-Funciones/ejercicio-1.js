//Juego: Adivina el Número mágico

//A partir de la definición de la funcion adivinar() debes diseñar una solución para adivinar el número ingresado por el usuario

// function adivinar() {
//     const numeroAleatorio = Math.floor( Math.random() * 10 ) + 1;    // Aleatorio de 1 a 10;
//     // Tu código aquí
// }
// Reto

// La funcion debe solicitar al usuario un número, usa la funcion prompt()
// El usuario debe tener 5 intentos para adivinar.
// En cada intento debe dar pistas como Intenta un número más alto, Intenta un número más bajo
// En el momento que se acierta devolver al usuario un mensaje Has adivinado! 


function adivinar(){
   
    const numeroAleatorio = Math.floor( Math.random() * 10 ) + 1;    // Aleatorio de 1 a 10;
        
    
    let intentos = 5

    for(let i = 0; i < 5; i++ ){
        let numeroIngresado =  Number(prompt('Ingresa un numero de 1 a 10'));
        if(numeroIngresado >= 1 && numeroIngresado <= 10) {
            if(numeroIngresado == numeroAleatorio){
            console.log("Felicidades!. Has adivinado!");
            break;        
            }        
                        
            else if(numeroIngresado != numeroAleatorio){
            intentos--    
            console.log(`Fallaste. Te quedan ${intentos} intentos. Ingresa otro numero del 1 a 10`);
            }
        }
                                    
        }   
        
        if (intentos == 0) {
                console.log(`Fallaste. Te quedaste sin intentos. El numero correcto era ${numeroAleatorio}`)
            } 

    }

    

adivinar()

