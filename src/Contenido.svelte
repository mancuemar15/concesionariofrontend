<script>
    import { Route } from "svelte-routing";
    import Coches from "./Coches.svelte";
    import Inicio from "./Inicio.svelte";
    import Vendedores from "./Vendedores.svelte";
</script>

<main class="container-fluid px-3 px-md-4">
    <Route path="/" component={Inicio} />
    <Route path="/vendedores" component={Vendedores} />
    <Route path="/coches" component={Coches} />
</main>
