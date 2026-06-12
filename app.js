let cantidadItems = 0;
let total = 0;

const badge = document.querySelector("#badge");
const listaCarrito = document.querySelector("#lista-carrito");
const totalSpan = document.querySelector("#total");
const btnVaciar = document.querySelector("#btn-vaciar");

function updateBadge() {
    badge.textContent = cantidadItems;
}

function updateTotal() {
    totalSpan.textContent = total;
}

const botones = document.querySelectorAll(".btn-agregar");

botones.forEach(boton => {

    boton.addEventListener("click", () => {

        const nombre = boton.dataset.nombre;
        const precio = Number(boton.dataset.precio);

        agregarAlCarrito(nombre, precio);

    });

});

function agregarAlCarrito(nombre, precio) {

    const li = document.createElement("li");
    li.classList.add(
        "list-group-item",
        "d-flex",
        "justify-content-between",
        "align-items-center"
    );

    li.innerHTML = `
        ${nombre} - $${precio}
        <button class="btn btn-danger btn-sm btn-eliminar">
            ✕
        </button>
    `;

    listaCarrito.appendChild(li);

    total += precio;
    cantidadItems++;

    updateTotal();
    updateBadge();

    const btnEliminar = li.querySelector(".btn-eliminar");

    btnEliminar.addEventListener("click", () => {
        eliminarItem(li, precio);
    });
}

function eliminarItem(li, precio) {
    li.remove();

    total -= precio;
    cantidadItems--;

    updateTotal();
    updateBadge();
}

btnVaciar.addEventListener("click", () => {
    listaCarrito.innerHTML = "";

    total = 0;
    cantidadItems = 0;

    updateTotal();
    updateBadge();
});

