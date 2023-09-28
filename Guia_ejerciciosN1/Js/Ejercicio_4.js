var numeros = prompt("Ingrese una serie de numeros separados por comas");
var separacion = numeros.split(",");

document.write(Math.max(...separacion));