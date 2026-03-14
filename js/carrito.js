let carrito = [];

function agregarCarrito(producto) {
    carrito.push(producto);
    actualizarPantalla();
}

function actualizarPantalla() {
    const lista = document.getElementById('carrito');
    lista.innerHTML = "";

    carrito.forEach(producto => {
        const nuevoItem = document.createElement('li');
        nuevoItem.textContent = producto;
        lista.appendChild(nuevoItem);
    });
}
