import Producto from "./Producto.js";

export default class CarritoItem {
    constructor(producto, cantidad) {
        this.producto = producto;
        this.cantidad = cantidad;
        this.total = producto.precio * this.cantidad;
    }
}