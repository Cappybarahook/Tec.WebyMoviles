var altura = prompt("Ingrese su altura en mts");
var peso = prompt("ingrese su peso en kg");
var imc = peso / (Math.pow(altura, 2));

if (altura <= 0 || peso <= 0) {
    alert("Ingrese una altura o peso validas");
} else {
    if (imc < 18.5) {
        document.write("Su IMC es de " + imc + " usted esta en la categoria de 'Bajo peso'");
    } else if (imc >= 18.5 && imc <= 24.9) {
        document.write("Su IMC es de " + imc + " usted esta en la categoria de 'Normal'");
    } else {
        document.write("Su IMC es de " + imc + " usted esta en la categoria de 'Sobrepeso'");
    }
}