<script>
    export let id;
    export let label;

    $: props = {
        ...$$restProps
    };
</script>

{#if label}
    <label {...props} for={id}>{label}
        {#if props.required}
            <span aria-invalid="true">*</span>
        {/if}
    </label>
{/if}
