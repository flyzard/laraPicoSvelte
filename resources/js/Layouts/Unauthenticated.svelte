<script context="module">
    import { writable } from "svelte/store";
    export const title = writable(null);
</script>
<svelte:head>
    <title>{$title ? `${$title} - Pico` : "Pico"}</title>
</svelte:head>
<!-- Main -->
<main>
    <slot />

    <p>
        For this example, we have compiled a custom and class-less version of
        pico (<a
            href="https://github.com/picocss/examples/blob/master/google-amp/"
            >Source code here</a
        >).
    </p>
</main>
<!-- ./ Main -->

<!-- Footer -->
<footer>
    <small
        >Built with <a href="https://picocss.com">Pico</a> •
        <a href="https://github.com/picocss/examples/tree/master/google-amp/"
            >Source code</a
        ></small
    >
</footer>
<!-- ./ Footer -->
