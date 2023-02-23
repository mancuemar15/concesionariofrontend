<script>
    import { onMount, getContext } from "svelte";
    import Boton from "./Boton.svelte";
    import Buscar from "./Buscar.svelte";
    import Coche from "./Coche.svelte";
    import { jsonData } from "./store";
    import { mostrarSpinner, ocultarSpinner } from "./helpers";

    const URL = getContext("URL");

    let coche = {};
    let cochesFiltrados = [];
    let busqueda = "";

    const getCoches = async () => {
        mostrarSpinner();
        const response = await fetch(URL.coches);
        $jsonData = await response.json();
        ocultarSpinner();
    };

    onMount(getCoches);

    $: cochesFiltrados = $jsonData.filter((coche) =>
        RegExp(busqueda, "i").test(`${coche.marca} ${coche.modelo}`)
    );
</script>

<h1 class="text-center fw-bolder my-4">COCHES</h1>

<Buscar bind:busqueda />

<div class="row my-3">
    <div class="col-md-6 d-flex justify-content-center d-lg-block">
        <Coche {coche}>
            <Boton tipo="insertar" documento={coche} coleccion="coches" />
        </Coche>
    </div>
</div>
<hr>
<div class="row row-cols-1 row-cols-md-2 row-cols-lg-auto g-3">
    {#each cochesFiltrados as coche}
        <div class="col d-flex justify-content-center d-lg-block">
            <Coche {coche}>
                <Boton tipo="modificar" documento={coche} coleccion="coches" />
                <Boton tipo="eliminar" documento={coche} coleccion="coches" />
            </Coche>
        </div>
    {/each}
</div>
