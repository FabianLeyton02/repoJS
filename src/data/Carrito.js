import Producto from "./Producto.js";

export default class Carrito {
    constructor() {
        this.listaCarrito = [];
    }
    CalcularCantidad() {
        let carritoTxt = document.getElementById("VerCarrito")
        carritoTxt.innerHTML = `Ver carrito (${this.listaCarrito.length})`
    }

    CalcularImporte() {
        let importeTxt = document.getElementById("importe")
        let importe = 0;
        this.listaCarrito.forEach((producto) => {
            importe += producto.precio;
        });
        importeTxt.innerHTML = `Total $${importe}`;
        this.CalcularCantidad();
    }

    Agregar(producto) {
        let lista = document.getElementById("carrito")
        let li = document.createElement("li");
        li.innerHTML = `${producto.nombre}   $${producto.precio}`;
        lista.appendChild(li)
        this.listaCarrito.push(producto);
        this.CalcularImporte();
        localStorage.setItem('carrito', JSON.stringify(this.listaCarrito));
    }

    Vaciar() {
        this.listaCarrito = [];
        let lista = document.getElementById("carrito")
        let ultimo = lista.lastElementChild
        while (ultimo) {
            lista.removeChild(ultimo);
            ultimo = lista.lastElementChild;
        }
        this.CalcularImporte();
        localStorage.removeItem('carrito');
    }
}