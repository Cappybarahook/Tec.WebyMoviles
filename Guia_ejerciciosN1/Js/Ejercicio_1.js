var numero = prompt("Ingrese un numero");
var resultado = 0;

for (var i = 1; i <= numero; i++) {
    if (i % 2 == 0) {
        resultado += i;
    }
}

document.write("La sumatoria de pares da como resultado " + resultado);