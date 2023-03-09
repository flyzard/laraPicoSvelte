<script>
    import { nanoid } from "nanoid";
    import Label from "@/Shared/Label.svelte";

    export let id = `text-input-${nanoid(5)}`;
    export let value;
    export let label;
    export let type = "text";
    export let error;

    $: err = error;
    $: hasError = !!err && value !== "";
    let input;

    export const focus = () => input.focus();
    export const select = () => input.select();

    $: props = {
        ...$$restProps
    };

    function update(event) {
        value = event.target.value;
    }
</script>

<div class={$$restProps.class}>
    <Label {label} {id} />

    <input
        {...props}
        bind:this={input}
        class:error
        {id}
        {type}
        {value}
        aria-invalid={hasError}
        on:input={update}
        required
    />

    {#if hasError}
        <div class="form-error">{err}</div>
    {/if}
</div>
