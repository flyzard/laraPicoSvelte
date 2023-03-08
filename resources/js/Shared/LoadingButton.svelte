<script>
    export let loading = false;

    $: props = {
        ...$$restProps
    };
</script>

<button {...props} disabled={loading} aria-busy={loading}>
    <slot />
</button>
