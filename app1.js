'use strict';
//1- Escribir un programa que solicite la edad y si es mayor de 18 años mostrar un mensaje que ya puede conducir, si la edad ingresada no es un número válido indicarlo en un mensaje.

let edad = prompt("Indique su edad")

if (isNaN(edad)){
    console.warn("no es un numero valido")
} else if (edad >= 18){
    console.log("Puedes Conducir!!")
}else{
    console.log("No puedes conducir")
}