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

class Articulo {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = parseFloat(precio);
    }
}

function dividir(a, b) {
    if (b == 0) {
        return 0;
    } else {
        return a / b;
    }
}

function sumarImportes(articulos) {
    let importefinal = 0;
    for (let index = 0; index < articulos.length; index++) {
        importefinal += articulos[index].precio;
    }
    return importefinal;
}

function agregarArticulos() {
    let cantidad = parseInt(prompt("Ingrese la cantidad de productos"));

    let precio = 0;
    let nombre = '';
    for (let index = 0; index < cantidad; index++) {
        nombre = prompt("Ingrese el nombre del artículo " + (index + 1))
        precio = prompt("Ingrese el precio del producto " + (index + 1));
        articulos.push(new Articulo(nombre, precio));
    }
}

function calcularImporteArticulos(articulos){
    let importefinal = sumarImportes(articulos);
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
}

const articulos = [];
let entrada = 0;

while (entrada != 4){
    entrada = parseInt(prompt("1 - Agregar articulos\n2 - Calcular Importes\n3 - Salir"))
    switch(entrada){
        case 1:
            agregarArticulos();
            break;
        case 2:
            calcularImporteArticulos(articulos);
            break;
        case 3:
            break;
    }
}