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
            <ul
                class="navbar-nav me-auto mb-2 mb-sm-0 px-3 px-sm-0 py-2 py-sm-0"
            >
                {#each opcionesNav as opcion}
                    <li>
                        <Link class="nav-link text-white text-blue position-relative" to={opcion.ruta}
                            >{opcion.pagina}</Link
                        >
                    </li>
                {/each}
            </ul>
        </div>
    </div>
</nav>

<style>
    nav {
        background-color: #0648b3 !important;
    }

    :global(.logo) {
        width: 100px;
    }

    :global(.nav-link) {
        width: fit-content;
    }

    :global(#contenidoNavbar li > a::before) {
        position: absolute;
        content: "";
        width: calc(100% - 1px);
        height: 1px;
        background-color: #fff;
        bottom: -1px;
        left: 0;

        transform: scale(0, 1);
        transform-origin: right center;

        transition: transform 0.5s ease;
    }

    :global(#contenidoNavbar li > a:hover::before),
    :global(#contenidoNavbar li > a.active::before) {
        transform: scale(1, 1);
        transform-origin: left center;
    }

    @media (min-width: 576px) {
        .navbar-nav {
            gap: 15px;
        }
    }

    @media (max-width: 575.99px) {
        #contenidoNavbar > ul {
            background-color: #fff !important;
            border-radius: 10px !important;
            margin-top: 15px !important;
        }

        :global(.text-blue) {
            color: #0648b3 !important;
            font-weight: 500;
        }

        :global(.text-blue:hover) {
            color: #0f1e38 !important;
        }
    }
</style>
