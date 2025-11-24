// Escribe un programa que pida al usuario ingresar un número, luego pide un segundo número e imprime en la consola la suma de los dos números ingresados.

let numero1 = Number(prompt('Ingresar un numero: '));
let numero2 = parseint(prompt('Ingresar un segundo numero: ')); 
//prompt('Escribe un numero: '); solo funciona en navegadores
//parseInt convierte un string a un numero entero
//parseFloat convierte un string a un numero decimal      


//Verificar que los valores ingresados son numeros
if( inNaN (numero1) && inNaN (numero2) ) {
    numero1 = Number(numero1);
    numero2 = Number(numero2);
    console.log(numero1+numero2);
}
else {
    console.log('ERROR: El valor ingresado no es un numero');    
    
}

