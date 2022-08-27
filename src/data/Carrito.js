import Producto from "./Producto.js";
import CarritoItem from "./CarritoItem.js";

export default class Carrito {
    constructor() {
        this.listaCarrito = [];
    }
    CalcularCantidad() {
        let carritoTxt = document.getElementById("VerCarrito")
        let cantidad = 0;
        this.listaCarrito.forEach((elemento) => {
            cantidad += elemento.cantidad;
        });
        carritoTxt.innerHTML = `Ver Carrito (${cantidad})`
    }

    CalcularImporte() {
        let importeTxt = document.getElementById("importe")
        let importe = 0;
        this.listaCarrito.forEach((elemento) => {
            importe += elemento.total;
        });
        importeTxt.innerHTML = `Total $${importe}`;
        this.CalcularCantidad();
    }

    Agregar(producto) {
        if (this.listaCarrito.length > 0) {
            let encontrado = false;
            this.listaCarrito.forEach((elemento) => {
                if (elemento.producto.id == producto.id) {
                    encontrado = true;
                    elemento.cantidad++;
                    elemento.total = elemento.cantidad * producto.precio;
                    let li = document.getElementById(`carrito-${producto.id}`);
                    li.innerHTML = `${elemento.cantidad} ${producto.nombre}   $${elemento.total}`;
                }
            });
            if (!encontrado) {
                this.AgregarAux(producto);
            }
        } else {
            this.AgregarAux(producto);
        }
        this.CalcularImporte();
        localStorage.setItem('carrito', JSON.stringify(this.listaCarrito));
    }

    AgregarAux(producto) {
        let lista = document.getElementById("carrito")
        let li = document.createElement("li");
        li.innerHTML = `1 ${producto.nombre}   $${producto.precio}`;
        li.setAttribute("id", `carrito-${producto.id}`);
        lista.appendChild(li)
        this.listaCarrito.push(new CarritoItem(producto, 1));
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