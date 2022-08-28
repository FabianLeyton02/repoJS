import Producto from "./Producto.js";

function cargarProductosEnPantalla(productos) {
    let lista = document.getElementById("listado")
    productos.forEach((producto) => {
        let li = document.createElement("li");
        let nombre = document.createElement("p");
        let precio = document.createElement("p");
        let boton = document.createElement("button");
        let imagen = document.createElement("img");
        let nombreimagen = `producto${producto.id}.jpg`;
        imagen.setAttribute("src", `/src/media/${nombreimagen}`);
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
}

function cargarProductos(nombre, precio, productos) {
    let id = productos.length + 1;
    productos.push(new Producto(id, nombre, precio));
}

export function iniciar() {
    let productos = [];

    cargarProductos("Hamburguesa", 100, productos);
    cargarProductos("Pizza", 300, productos);
    cargarProductos("Cerveza", 120, productos);
    cargarProductos("Milanesa", 220, productos);

    cargarProductosEnPantalla(productos);

    return productos;
}