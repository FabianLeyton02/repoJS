// let numero1 = parseInt(prompt("Ingresar un numero"))
// for (let index = 1; index <= numero1; index++) {
//     alert(index + ' - Hola');
// }

// let entrada = "";
// let numero2 = 1;
// let salir = false;
// while (!salir) {
//     entrada = prompt("Ingrese un valor");

//     if (entrada.toUpperCase().trim() == "ESC") {
//         salir = true;
//     } else {
//         alert(numero2 + ':' + entrada);
//         numero2++;
//     }
// }

function dividir(a, b) {
    if (b == 0) {
        return 0;
    } else {
        return a / b;
    }
}

let precio = parseInt(prompt("Ingrese el precio del producto"));
let cuotas = parseInt(prompt("Ingrese la cantidad de cuotas"));
let resultado = dividir(precio, cuotas)

if (resultado == 0) {
    if (precio == 0) {
        alert("El precio debe ser mayor a 0");
    }
    if (cuotas == 0) {
        alert("La cantidad de cuotas debe ser mayor a 0");
    }
} else {
    alert("En " + cuotas + " cuotas, el monto de cada una será de $" + resultado);
}