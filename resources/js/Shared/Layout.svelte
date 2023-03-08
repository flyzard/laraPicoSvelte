<script context="module">
    import { writable } from "svelte/store";
    export const title = writable(null);
</script>

<script>
    import UserControlls from "./UserControlls.svelte";
    import SmallCart from "./SmallCart.svelte";
    import { onMount } from "svelte";
    import { inertia, page } from "@inertiajs/svelte";
    import { showToast, loadScript } from "@/utils";
    import stickyNavbar from "./../libs/sticky-navbar";
    import tooltip from "./../libs/tooltip";
    import { SvelteToast } from "@zerodevx/svelte-toast";
    import SearchBox from "@/Shared/SearchBox.svelte";


    // Show toast
    $: toastMessage = $page.props.flash.toast;
    $: showToast(toastMessage);

    let locale = $page.props.locale;

    // Variable to control Menu on scroll
    let showMenu = false;
    function doShowMenu() {
        showMenu = !showMenu;
    }

    onMount(async () => {
        await loadScript("/js/tiny-slider.js");
        await loadScript("/js/bootstrap.bundle.min.js");
        stickyNavbar();
        tooltip();
    });

    let categoriesNav = $page.props.categories ?? [];
</script>

<svelte:head>
    <title>{$title ? `${$title} - Belcamp` : "Belcamp"}</title>
</svelte:head>
<SvelteToast />
<main class="page-wrapper">
    <header class="shadow-sm">
        <div class="navbar-sticky bg-light">
            <div class="navbar navbar-expand-lg navbar-light pt-2">
                <div class="container">
                    <a class="navbar-brand d-none d-sm-block me-3 flex-shrink-0 py-0" href="/" use:inertia >
                        <img src="/images/belcamp-logo.png" width="350" alt="Belcamp"/>
                    </a>
                    <a class="navbar-brand d-sm-none me-2" href="/">
                        <img src="/images/belcamp-logo.png" width="160" alt="Belcamp"/>
                    </a>
                    <!-- Search-->
                    <SearchBox className="d-none d-lg-flex mx-4"/>

                    <!-- Toolbar-->
                    <div class="navbar-toolbar d-flex flex-shrink-0 align-items-center">
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" ><span class="navbar-toggler-icon" /></button>
                        <a class="navbar-tool navbar-stuck-toggler" on:click={doShowMenu} href={null} ><span class="navbar-tool-tooltip">Toggle menu</span>
                            <div class="navbar-tool-icon-box">
                                <i class="navbar-tool-icon ci-menu" />
                            </div>
                        </a>

                        <UserControlls user={$page.props.auth.user} />

                        {#if $page.props.auth.user}
                            <SmallCart />
                        {/if}
                    </div>
                </div>
            </div>
            <div class="navbar navbar-expand-lg navbar-light navbar-stuck-menu mt-n2 pt-0 pb-2 {showMenu ? 'show' : ''}">
                <div class="container">
                    <div class="collapse navbar-collapse" id="navbarCollapse">
                        <SearchBox className="d-lg-none my-3"/>
                        <!-- Departments menu-->
                        <ul class="navbar-nav navbar-mega-nav pe-lg-2 me-lg-2">
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle ps-lg-0" href={null} data-bs-toggle="dropdown" data-bs-auto-close="outside">
                                    <i class="ci-menu align-middle mt-n1 me-2"/>{__("Categorias")}
                                </a>
                                <ul class="dropdown-menu">
                                    {#each categoriesNav as category}
                                        <li class="dropdown mega-dropdown">
                                            <a class="dropdown-item dropdown-toggle" href="/c/{category.slug}" data-bs-toggle="dropdown" >
                                                <!-- <i class="ci-laptop opacity-60 fs-lg mt-n1 me-2"/> -->
                                                {category.name}
                                            </a>

                                            <div class="dropdown-menu p-0">
                                                <div class="d-flex flex-wrap flex-sm-nowrap px-2">
                                                    <div class="mega-dropdown-column pt-4 pb-0 py-sm-4 px-3" >
                                                        <div class="widget widget-links">
                                                            <a href="/c/{category.slug}">
                                                                <h6 class="fs-base mb-3">{__('Tudo em')} {category.name}</h6>
                                                            </a>

                                                            <ul class="widget-list">
                                                                {#each category.children as subcategory}
                                                                    <li class="widget-list-item pb-1">
                                                                        <a class="widget-list-link" href="/c/{category.slug}/{subcategory.slug}">
                                                                            {subcategory.name}
                                                                        </a>
                                                                    </li>
                                                                {/each}
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    {/each}
                                </ul>
                            </li>
                        </ul>
                        <!-- Primary menu-->
                        <ul class="navbar-nav">
                            <!-- <li class="nav-item"><a class="nav-link" href="/about">{__("Sobre Nós")}</a></li> -->
                            <li class="nav-item"><a class="nav-link" href="/contacts">{__("Contactos")}</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </header>

    <slot />
</main>
<footer class="footer bg-dark">
    <div class="pt-5 bg-darker">
        <div class="container">
            <div class="row pb-2">
                <div class="col-md-7 text-center text-md-start mb-4">
                    <div class="text-nowrap mb-4">
                        <a class="d-inline-block align-middle mt-n1 me-3" href={null}><img class="d-block" src="/images/belcamp-logo.png" width="117" alt="Belcamp"/></a>
                        <div class="btn-group dropdown disable-autohide">
                            <button class="btn btn-outline-light border-light btn-sm dropdown-toggle px-2" type="button" data-bs-toggle="dropdown">
                                <img class="me-2" src="/img/flags/{locale}.png" width="20" alt="{locale}"/>{locale}
                            </button>
                            <ul class="dropdown-menu my-1">
                                <li>
                                    <a class="dropdown-item" href="/locale/pt">
                                        <img class="me-2" src="/img/flags/pt.png" width="20" alt="Portugês"/>Portugês
                                    </a>
                                </li>
                                <li>
                                    <a class="dropdown-item" href="/locale/en">
                                        <img class="me-2" src="/img/flags/en.png" width="20" alt="English"/>English
                                    </a>
                                </li>
                                <li>
                                    <a class="dropdown-item " href="/locale/es">
                                        <img class="me-2" src="/img/flags/es.png" width="20" alt="Español"/>Español
                                    </a>
                                </li>
                                <li>
                                    <a class="dropdown-item" href="/locale/fr">
                                        <img class="me-2" src="/img/flags/fr.png" width="20" alt="Français"/>Français
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <!-- <div class="widget widget-links widget-light">
                        <ul class="widget-list d-flex flex-wrap justify-content-center justify-content-md-start">
                            <li class="widget-list-item me-4">
                                <a class="widget-list-link" href={null}>Outlets</a>
                            </li>
                            <li class="widget-list-item me-4">
                                <a class="widget-list-link" href={null}>Affiliates</a>
                            </li>
                            <li class="widget-list-item me-4">
                                <a class="widget-list-link" href={null}>Support</a>
                            </li>
                            <li class="widget-list-item me-4">
                                <a class="widget-list-link" href={null}>Privacy</a>
                            </li>
                            <li class="widget-list-item me-4">
                                <a class="widget-list-link" href={null}>Terms of use</a>
                            </li>
                        </ul>
                    </div> -->
                </div>
                <div class="col-md-5 mb-4">
                    <div class="row">
                        <div class="col-md-6 col-sm-12">
                            <div class="d-flex">
                                <i class="ci-location text" style="font-size: 2.25rem;"/>
                                <div class="ps-3">
                                    <h6 class="fs-base text-light mb-1">Encontre-nos em</h6>
                                    <p class="mb-0 fs-ms text-light opacity-50">Estrada Nacional 366</p>
                                    <p class="mb-0 fs-ms text-light opacity-50">2050-145 Aveiras de Cima</p>
                                    <p class="mb-0 fs-ms text-light opacity-50">Portugal</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 col-sm-12">
                            <div class="d-flex">
                                <i class="ci-phone text" style="font-size: 2.25rem;"/>
                                <div class="ps-3">
                                    <h6 class="fs-base text-light mb-1">Contactos</h6>
                                    <p class="mb-0 fs-ms text-light opacity-50">+351 263 470 260</p>
                                    <p class="mb-0 fs-ms text-light opacity-50">bel-camp.pt</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="pb-4 fs-xs text-light opacity-50 text-center text-md-start">
                © All rights reserved. Made by
                <a class="text-light" href={null} target="_blank" rel="noopener noreferrer">flyzard</a>
            </div>
        </div>
    </div>
</footer>
<a class="btn-scroll-top" href="#top" data-scroll>
    <span class="btn-scroll-top-tooltip text-muted fs-sm me-2">Top</span>
    <i class="btn-scroll-top-icon ci-arrow-up" />
</a>
