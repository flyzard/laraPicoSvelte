<script>
    import { nanoid } from "nanoid";
    import Label from "@/Shared/Label.svelte";

    export let id = `text-input-${nanoid(5)}`;
    export let value;
    export let label;
    export let error;

    $: err = error;

    $: hasError = () => {
        if (value === "") {
            return "";
        }

        return !!err;
    };
</script>

<div class={$$restProps.class}>
    <Label {label} {id} {...$$restProps} />

    <input
        {...$$restProps}
        class:error
        {id}
        type="text"
        bind:value={value}
        aria-invalid={hasError()}
        placeholder={label}
    />

    {#if hasError()}
        <div class="form-error">{err}</div>
    {/if}
</div>
