import Carrito from "./data/Carrito.js";
import Producto from "./data/Producto.js";

let carrito = new Carrito();
let productos = [];
let id = 1;
productos.push(new Producto(id, "Hamburguesa", 100));
id++;
productos.push(new Producto(id, "Pizza", 300));
id++;
productos.push(new Producto(id, "Cerveza", 120));
id++;
productos.push(new Producto(id, "Milanesa", 220));

let lista = document.getElementById("listado")
productos.forEach((producto) => {
    let li = document.createElement("li");
    let nombre = document.createElement("p");
    let precio = document.createElement("p");
    let boton = document.createElement("button");
    let imagen = document.createElement("img");
    let nombreimagen = `producto${producto.id}.jpg`;
    imagen.setAttribute("src", `./src/media/${nombreimagen}`);
    imagen.setAttribute("alt", nombreimagen);
    imagen.setAttribute("class", "imagen");
    nombre.innerHTML = producto.nombre;
    precio.innerHTML = `$${producto.precio}`
    boton.innerHTML = "Agregar";
    boton.setAttribute("id", producto.id);
    li.appendChild(imagen);
    li.appendChild(nombre);
    li.appendChild(precio);
    li.appendChild(boton);
    lista.appendChild(li);
});

let ids = productos.length;
for (let index = 0; index < ids; index++) {
    let indice = index + 1;
    let boton = document.getElementById(indice.toString());
    boton.addEventListener('click', () => {
        carrito.Agregar(productos[index]);
    });
}

let carritostorage = JSON.parse(localStorage.getItem('carrito'));
if (carritostorage) {
    carritostorage.forEach(element => {
        carrito.Agregar(element);
    });
}

let boton2 = document.getElementById("vaciar");
boton2.addEventListener("click", () => {
    carrito.Vaciar();
})

let boton3 = document.getElementById("VerCarrito");
boton3.addEventListener("click", () => {
    let tabla = document.getElementById("carrito");
    tabla.hasAttribute("hidden") ? tabla.removeAttribute("hidden") : tabla.setAttribute("hidden", "true");
})
