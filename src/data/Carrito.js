import Producto from "./Producto.js";

export default class Carrito {
    constructor() {
        this.productos = [];
    }

    CalcularImporte() {
        let importeTxt = document.getElementById("importe")
        let importe = 0;
        this.productos.forEach((producto) => {
            importe += producto.precio
        });
        importeTxt.innerHTML = `Total $${importe}`
    }

    Agregar() {
        let cantidad = parseInt(prompt("Ingrese la cantidad de productos"));
        let precio = 0;
        let nombre = '';
        let lista = document.getElementById("carrito")
        for (let index = 0; index < cantidad; index++) {
            nombre = prompt("Ingrese el nombre del artículo " + (index + 1))
            precio = prompt("Ingrese el precio del producto " + (index + 1));
            let li = document.createElement("li");
            li.innerHTML = `${nombre}   $${precio}`;
            lista.appendChild(li)
            this.productos.push(new Producto(nombre, precio));
        }
        this.CalcularImporte();
    }

    Vaciar() {
        this.productos = [];
        let lista = document.getElementById("carrito")
        let ultimo = lista.lastElementChild
        while(ultimo){
            lista.removeChild(ultimo);
            ultimo = lista.lastElementChild;
        }
        this.CalcularImporte();
    }
}