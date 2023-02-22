<script>
    import { onMount, getContext } from "svelte";
    import Boton from "./Boton.svelte";
    import Buscar from "./Buscar.svelte";
    import Vendedor from "./Vendedor.svelte";
    import { jsonData } from "./store";

    const URL = getContext("URL");

    let vendedor = {};
    let vendedoresFiltrados = [];
    let busqueda = "";

    const getVendedores = async () => {
        const response = await fetch(URL.coches);
        $jsonData = await response.json();
    };

    onMount(getVendedores);

    $: vendedoresFiltrados = $jsonData.filter((coche) =>
        RegExp(busqueda, "i").test(vendedor.nombre)
    );
</script>

<h1>Vendedores works!</h1>
