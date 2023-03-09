<script context="module">
    import { writable } from "svelte/store";
    export const title = writable(null);
</script>
<svelte:head>
    <title>{$title ? `${$title} - Pico` : "Pico"}</title>
</svelte:head>

<nav>
    <ul>
      <!-- <li><a href="/" class="secondary">…</a></li> -->
    </ul>
    <ul>
      <li><strong>Brand</strong></li>
    </ul>
    <ul>
      <!-- <li><a href="/" class="secondary">…</a></li> -->
    </ul>
</nav>
<main class="container center">
    <slot />
    <footer>
        <small
            >Built with <a href="https://picocss.com">Pico</a> •
            <a href="https://github.com/picocss/examples/tree/master/google-amp/"
                >Source code</a
            ></small
        >
    </footer>
</main>
