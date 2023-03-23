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

    let oldValue = value;
    const onChange = () => {
        err = oldValue === value ? err : false;

        if (!value) {
            err = false;
            return;
        }
    };
</script>

<div class={$$restProps.class}>
    <Label {label} {id} {...$$restProps} />

    <input
        {...$$restProps}
        class:error
        {id}
        type="password"
        bind:value={value}
        aria-invalid={hasError()}
        on:change={onChange}
        placeholder={label}
    />

    {#if hasError()}
        <div class="form-error">{err}</div>
    {/if}
</div>
