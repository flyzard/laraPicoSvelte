<script>
    import { nanoid } from "nanoid";
    import Label from "@/Shared/Label.svelte";

    export let id = `text-input-${nanoid(5)}`;
    export let value;
    export let label;
    export let type = "text";
    export let error;

    $: err = error;

    let input;

    export const focus = () => input.focus();
    export const select = () => input.select();

    $: props = {
        ...$$restProps,
        class: "form-control",
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
        on:input={update}
    />

    {#if err}
        <div class="invalid-feedback d-block">{err}</div>
    {/if}
</div>
