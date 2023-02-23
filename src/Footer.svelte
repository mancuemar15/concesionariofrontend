<script>
    import { Link } from "svelte-routing";
</script>

<footer class="py-4 py-md-2 my-4 bg-dark">
    <div class="container">
        <div class="row">
            <div
                class="col-md-5 d-flex justify-content-center justify-content-md-start align-items-center"
            >
                <p class="text-light m-0">&copy; Manuel Cuevas Martín</p>
            </div>
            <Link
                class="col-md-2 d-flex align-items-center justify-content-center my-4"
                to="/"
            >
                <img
                    class="logo"
                    src="img/logo-concesionario.svg"
                    alt="Logo del concesionario"
                />
            </Link>
            <div
                class="col-md-5 d-flex justify-content-center justify-content-md-end align-items-center"
            >
                <p class="text-light m-0">
                    Código fuente en
                    <a
                        href="https://github.com/mancuemar15/concesionariofrontend"
                        target="_blank"
                        rel="noreferrer">GitHub</a
                    >
                </p>
            </div>
        </div>
    </div>
</footer>
