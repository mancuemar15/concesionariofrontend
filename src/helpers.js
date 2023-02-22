function mostrarSpinner() {
    document.querySelector("#spinner-loading").classList.remove("d-none");
    document.querySelector("#capa-opaca").classList.remove("d-none");
}

function ocultarSpinner() {
    document.querySelector("#capa-opaca").classList.add("d-none");
    document.querySelector("#spinner-loading").classList.add("d-none");
}

export { mostrarSpinner, ocultarSpinner };