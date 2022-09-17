export default class Producto {
    constructor(id, nombre, precio, categoria) {
        this.id = id;
        this.nombre = nombre;
        this.precio = parseFloat(precio);
        this.categoria = categoria;
    }
}