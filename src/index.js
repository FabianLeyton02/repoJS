import Carrito from "./data/Carrito.js";
import {
    iniciar,
    cargarProductosEnPantalla
} from "./data/Inicio.js";
import Producto from "./data/Producto.js";


// Defino carrito y listado de productos -------------------------------------------
const carrito = new Carrito();
const productos = await iniciar();

// Funciones auxiliares -------------------------------------------
function limpiar() {
    let listado = document.getElementById("listado");
    while (listado.firstChild) {
        listado.removeChild(listado.firstChild);
    }
}

function inicializarListado(aux) {
    limpiar();
    cargarProductosEnPantalla(aux);
    setearBotones(aux);
}

function setearBotones(aux) {
    aux.forEach(element => {
        let boton = document.getElementById(element.id.toString());
        boton.addEventListener('click', () => {
            Swal.fire({
                position:'top-end',
                icon: 'success',
                timer:'800',
            })
            carrito.Agregar(element);
        });
    })
}

inicializarListado(productos);

// obtengo carrito desde el local storage -------------------------------------------

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

// defino eventos para los botones -------------------------------------------

let boton2 = document.getElementById("vaciar");
boton2.addEventListener("click", () => {
    Swal.fire({
        position:'bottom-end',
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

let boton4 = document.getElementById("limpiar");
boton4.addEventListener("click", () => {
    let categorias = document.getElementById("categoriasop");
    categorias.value = 0;
    inicializarListado(productos);
})

let boton5 = document.getElementById("aplicar");
boton5.addEventListener("click", () => {
    let filtro = parseInt(document.getElementById("categoriasop").value);

    if (filtro == 0) {
        inicializarListado(productos);
    } else {
        inicializarListado(productos.filter(producto => producto.categoria == filtro));
    }
})