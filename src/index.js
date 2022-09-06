import Carrito from "./data/Carrito.js";
import {
    iniciar
} from "./data/Inicio.js";
import Producto from "./data/Producto.js";

let carrito = new Carrito();
let productos = await iniciar();

let ids = productos.length;
for (let index = 0; index < ids; index++) {
    let indice = index + 1;
    let boton = document.getElementById(indice.toString());
    boton.addEventListener('click', () => {
        Swal.fire({
            title: 'Genial!',
            text: 'Se agregó un producto al carrito',
            icon: 'success',
            confirmButtonText: 'Cerrar'
        })
        carrito.Agregar(productos[index]);
    });
}

let carritostorage = JSON.parse(localStorage.getItem('carrito'));
let index = 0
if (carritostorage) {
    carritostorage.forEach(element => {
        let producto = element.producto;
        let cantidad = element.cantidad;
        for (index = 0; index < cantidad; index++) {
            carrito.Agregar(producto);
        }
    });
}

let boton2 = document.getElementById("vaciar");
boton2.addEventListener("click", () => {
    Swal.fire({
        title: 'Se han quitado los elementos del carrito',
        icon: 'info',
        confirmButtonText: 'Cerrar'
    })
    carrito.Vaciar();
})

let boton3 = document.getElementById("VerCarrito");
boton3.addEventListener("click", () => {
    let tabla = document.getElementById("carrito");
    tabla.hasAttribute("hidden") ? tabla.removeAttribute("hidden") : tabla.setAttribute("hidden", "true");
})