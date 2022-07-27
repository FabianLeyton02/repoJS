let numero1 = parseInt(prompt("Ingresar un numero"))
for (let index = 1; index <= numero1; index++) {
    alert(index + ' - Hola');
}

let entrada = "";
let numero2 = 1;
let salir = false;
while (!salir) {
    entrada = prompt("Ingrese un valor");

    if (entrada.toUpperCase().trim() == "ESC") {
        salir = true;
    } else {
        alert(numero2 + ':' + entrada);
        numero2++;
    }
}