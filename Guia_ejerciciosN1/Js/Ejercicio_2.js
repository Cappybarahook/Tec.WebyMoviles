var oracion = prompt("Ingrese una oracion");
var separacion = oracion.split(" ");
var resultado = separacion.length;
document.write("La oracion ingresada contiene " + resultado + " palabras");