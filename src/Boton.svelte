<script>
    import { getContext, onMount } from "svelte";
    import { jsonData } from "./store";

    export let tipo = "insertar";
    export let documento = {};
    export let coleccion = "vendedores";

    const URL = getContext("URL");
    let url = "";
    let clase = "";

    function insertar() {
        if (comprobarDocumentoValido()) {
            const opciones = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(documento),
            };
            fetch(url, opciones)
                .then((response) => response.json())
                .then((data) => {
                    $jsonData = [...$jsonData, data];
                    ok("Se ha insertado correctamente.");
                })
                .catch(() => ko("No se ha podido insertar."));
        } else {
            ko("Faltan datos.");
        }
    }

    function modificar() {
        if (comprobarDocumentoValido()) {
            const opciones = {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(documento),
            };
            fetch(`${url}/${documento._id}`, opciones)
                .then((response) => response.json())
                .then(() => ok("Se ha modificado correctamente."))
                .catch(() => ko("No se ha podido modificar."));
        } else {
            ko("No puede haber campos vacíos.");
        }
    }

    function eliminar() {
        const opciones = {
            method: "DELETE",
        };
        fetch(`${url}/${documento._id}`, opciones)
            .then((response) => response.json())
            .then((data) => {
                $jsonData = $jsonData.filter(
                    (documento) => documento._id !== data._id
                );
                ok("Se ha eliminado correctamente.");
            })
            .catch(() => {
                ko("No se ha podido eliminar.");
            });
    }

    const comprobarDocumentoValido = () => {
        let documentoValido = false;

        if (
            Object.keys(documento).length > 1 &&
            Object.values(documento).every((x) => x !== undefined && x != "")
        ) {
            documentoValido = true;
        }

        return documentoValido;
    };

    const ok = (mensaje = "Operación realizada con éxito") => {
        const toastAlerta = document.getElementById("OK");
        const toast = new bootstrap.Toast(toastAlerta);

        document.querySelector("#OK .toast-body").innerHTML = mensaje;

        toast.show();
    };

    const ko = (mensaje = "No se ha podido realizar la operación.") => {
        const toastAlerta = document.getElementById("KO");
        const toast = new bootstrap.Toast(toastAlerta);

        document.querySelector("#KO .toast-body").innerHTML = mensaje;

        toast.show();
    };

    const handler = (() => {
        switch (tipo) {
            case "insertar":
                clase = "btn-outline-success";
                return insertar;
            case "modificar":
                clase = "btn-outline-primary";
                return modificar;
            case "eliminar":
                clase = "btn-outline-danger";
                return eliminar;
        }
    })();

    onMount(() => {
        switch (coleccion) {
            case "vendedores":
                url = URL.vendedores;
                break;
            case "coches":
                url = URL.coches;
                break;
        }
    });
</script>

<input
    type="button"
    class="{clase} btn fw-bold px-3 px-xl-4 my-0"
    value={tipo.toUpperCase()}
    on:click={handler}
/>

<style>
    .btn {
        border-radius: 0;
        border-width: 2px;
        transition: 0.5s;
    }

    .btn:hover {
        transform: translateY(-3px) scale(1.05);
    }

    .btn-outline-success:hover {
        box-shadow: 4px 4px 10px 0px rgba(25, 135, 84, 1);
    }

    .btn-outline-primary:hover {
        box-shadow: 4px 4px 10px 0px rgba(13, 110, 253, 1);
    }

    .btn-outline-danger:hover {
        box-shadow: 4px 4px 10px 0px rgba(220, 53, 69, 1);
    }
</style>
