/*Escribe un programa que pida al usuario su año de nacimiento y nombre e imprime su edad actual en la consola con la frase Hola X, grandioso! Tienes X años. Asume que el año actual es 2020 y el usuario ingresa 2000, el programa debe imprimir en la consola: Hola Juan, grandioso! Tienes 20 años*/

const anoNacimiento = prompt('Ingresa tu año de nacimiento: ');
const nombre = prompt('Ingresa tu nombre: ');
const edadActual = 2024 - Number(anoNacimiento);
console.log('Hola ' + nombre + ', grandioso! Tienes ' + edadActual + ' años.');