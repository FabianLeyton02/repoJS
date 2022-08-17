import Carrito from "./data/Carrito.js";

let carrito = new Carrito();
// let entrada = 0;
// while (entrada != 5){
//     entrada = parseInt(prompt("1 - Agregar articulos\n2 - Calcular Importes\n3 - Ver cantidad\n4- Vaciar carrito\n5 - Salir"))
//     switch(entrada){
//         case 1:
//             carrito.Agregar();
//             break;
//         case 2:
//             let importe = carrito.CalcularImporte();
//             alert(`El importe es de $${importe}`)
//             break;
//         case 3:
//             let cantidad = carrito.CantidadProductos();
//             alert(`Hay ${cantidad} productos en el carrito`);
//             break;
//         case 4:
//             carrito.Vaciar()
//             break;
//         case 5:
//             break;
//         default:
//             alert("Entrada inválida")
//             break;
//     }
// }

let boton1 = document.getElementById("1");
boton1.onclick = () => {
    carrito.Agregar();
}

let boton2 = document.getElementById("2");
boton2.onclick = () => {
    carrito.Vaciar();
}
