'use strict';
//10- Realiza un script que pida número de filas y columnas y escriba una tabla. Dentro de cada una de las celdas deberá escribirse un número consecutivo en orden descendente. Si, por ejemplo, la tabla es de 7×5 los números irán del 35 al 1.

let filas =parseInt( prompt("Ingrese un numero para las filas"));
let col =parseInt( prompt("Ingrese un numero para las columnas"));

let numero = filas * col;

for (let i = 0; i < filas; i++) {
  let filas = "";
  for (let j = 0; j < col; j++) {
  filas += `[${numero }]`;
    numero--;
  }
  console.log( filas );
}