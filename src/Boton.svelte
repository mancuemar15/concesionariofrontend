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
                ok();
            })
            .catch(() => ko());
    }

    function modificar() {
        const opciones = {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(documento),
        };
        fetch(`${url}/${documento._id}`, opciones)
            .then((response) => response.json())
            .then(() => ok())
            .catch(() => ko());
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
                ok();
            })
            .catch(() => ko());
    }

    const ok = () => {
        const toastAlerta = document.getElementById("OK");
        const toast = new bootstrap.Toast(toastAlerta);

        toast.show();
    };

    const ko = () => {
        const toastAlerta = document.getElementById("KO");
        const toast = new bootstrap.Toast(toastAlerta);

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
