<script>
    import { Link } from "svelte-routing";

    const opcionesNav = [
        { pagina: "Inicio", ruta: "/" },
        { pagina: "Vendedores", ruta: "/vendedores" },
        { pagina: "Coches", ruta: "/coches" },
    ];
</script>

<nav class="navbar navbar-expand-sm navbar-dark bg-dark">
    <div class="container-fluid">
        <Link class="navbar-brand mx-sm-4" to="/">
            <img
                class="logo"
                src="img/logo-concesionario.svg"
                alt="Logo del concesionario"
            />
        </Link>
        <button
            class="navbar-toggler m-0"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#contenidoNavbar"
            aria-controls="contenidoNavbar"
            aria-expanded="false"
        >
            <span class="navbar-toggler-icon" />
        </button>
        <div class="collapse navbar-collapse" id="contenidoNavbar">
            <ul class="navbar-nav me-auto mb-2 mb-sm-0">
                {#each opcionesNav as opcion}
                    <li>
                        <Link class="nav-link" to={opcion.ruta}
                            >{opcion.pagina}</Link
                        >
                    </li>
                {/each}
            </ul>
        </div>
    </div>
</nav>

<style>
    .logo {
        width: 100px;
    }

    @media (min-width: 576px) {
        .navbar-nav {
            gap: 15px;
        }
    }
</style>
