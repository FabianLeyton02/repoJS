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

function sumarImportes(carrito) {
    let importe = 0;
    for (let index = 0; index < carrito.length; index++) {
        importe += carrito[index];
    }
    return importe;
}

const carrito = [];

let cantidad = parseInt(prompt("Ingrese la cantidad de productos"));

let precio = 0;
for (let index = 0; index < cantidad; index++) {
    precio = parseInt(prompt("Ingrese el precio del producto " + (index + 1)));
    carrito.push(precio);
}

let importefinal = sumarImportes(carrito);
let cuotas = parseInt(prompt("El total de la compra es de $" + importefinal + ".\nIngrese la cantidad de cuotas"));
let resultado = dividir(importefinal, cuotas)

if (resultado == 0) {
    if (importefinal == 0) {
        alert("El precio debe ser mayor a 0");
    }
    if (cuotas == 0) {
        alert("La cantidad de cuotas debe ser mayor a 0");
    }
} else {
    alert("En " + cuotas + " cuotas, el monto de cada una será de $" + resultado);
}