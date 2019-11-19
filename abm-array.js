const productos = ["Celular", "Cartera", "Taza", "Vaso", "Florero"];
let accion = prompt("¿Que acción querés realizar en tu carrito de compras?")

// // siempre con FOR
// if (accion === "BORRAR") 
//     // el usuario indica que producto quiere borrar, y lo eliminamos
//     // luego mostramos EN CONSOLA el carrito}

// if (accion === "EDITAR") 
//         // el usuario indica que producto quiere editar, y lo editamos
//         // luego mostramos EN CONSOLA el carrito}

// if (accion === "AGREGAR") 

//     // el usuario indica que producto quiere agregar, y lo agregamos
//     // luego mostramos EN CONSOLA el carrito 


if (accion === "borrar") {
    var productoSeleccionado = prompt("¿Qué producto desea sacar de su carrito de compras?")

    for (i = 0; i < productos.length; i++) {
        if (productos[i] === productoSeleccionado) {
            productos.splice(i, 1)
            console.log(productos)
        }
    }
}
if (accion === "editar") {
    productoSeleccionado = prompt("¿Qué producto desea modificar?")

    for (let i = 0; i < productos.length; i++) {
        if (productos[i] === productoSeleccionado) {
            var productoModificar = prompt("¿Por cuál producto querés modificarlo?")
            productos[i] = productoModificar
            console.log(productos)
        }
    }
}
if (accion === "agregar") {
    productoSeleccionado = prompt("¿Qué producto desea agregar?")
    productos.push(productoSeleccionado)
    console.log(productos)

}