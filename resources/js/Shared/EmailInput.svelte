<script>
    import { nanoid } from "nanoid";
    import Label from "@/Shared/Label.svelte";

    export let id = `text-input-${nanoid(5)}`;
    export let value;
    export let label;
    export let error;

    let validateEmail = (email) => {
        // return value.match(validRegex)
        var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        return validRegex.test(email);
    };

    let oldValue = value;

    $: err = error;
    $: hasError = () => {
        if (value === "") {
            return "";
        }

        return !!err;
    };

    const onChange = () => {
        err = oldValue === value ? err : false;

        if (!value) {
            err = false;
            return;
        }

        if (!validateEmail(value)) {
            err = "Invalid email address!";
        }
    };
</script>

<div class={$$restProps.class}>
    <Label {label} {id} {...$$restProps} />

    <input
        {...$$restProps}
        class:error
        {id}
        type="email"
        bind:value={value}
        aria-invalid={hasError()}
        on:change={onChange}
        placeholder={label}
    />

    {#if hasError()}
        <div class="form-error">{err}</div>
    {/if}
</div>
