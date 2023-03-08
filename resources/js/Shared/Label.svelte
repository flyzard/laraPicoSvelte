<script>
    export let id;
    export let label;

    $: props = {
        ...$$restProps,
        class: `form-label px-0 ${$$restProps.class || ""}`,
    };
</script>

{#if label}
    <label {...props} for={id}
        >{label}
        {#if props.required}
            <span class="text-danger">*</span>
        {/if}
    </label>
{/if}
