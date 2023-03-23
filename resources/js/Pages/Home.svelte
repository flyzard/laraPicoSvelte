<script context="module">
    import Unauthenticated, { title } from "@/Layouts/Unauthenticated.svelte";
    export const layout = Unauthenticated;
</script>

<script>
    import { inertia, Link, page } from '@inertiajs/svelte';
</script>

<article>

    {#if $page.props.auth.user}
        <p>Logged in as {$page.props.auth.user.name}</p>
        <Link href="/logout" method="POST">
            {__("Sair")}
        </Link>
    {:else}
        <p><a href="/login" use:inertia>Login</a></p>
    {/if}

    <h1>Test home page</h1>
</article>
