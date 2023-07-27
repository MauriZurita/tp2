'use strict';
// 11- Realiza un script que pida por teclado 3 edades y 3 nombres e indique el nombre del mayor. *

// Nota: ver funcion Math() https://www.w3schools.com/js/js_math.asp

let edades = [];

edades.push(edad1);
edades.push(edad2);
edades.push(edad3);


let mayor = Math.max(edad1, edad2, edad3);

if (edad1 === mayor) {
    console.log(`La persona mayor es: ${nombre1}`);
} else if (edad2 === mayor) {
    console.log(`La persona mayor es: ${nombre2}`);
} else{
    console.log(`La persona mayor es: ${nombre3}`);

}
console.log(mayor);