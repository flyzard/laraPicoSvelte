<script context="module">
    import Unauthenticated, { title } from "@/Layouts/Unauthenticated.svelte";
    export const layout = Unauthenticated;
</script>

<script>
    import { useForm, router, inertia } from '@inertiajs/svelte';

    import LoadingButton from "@/Shared/LoadingButton.svelte";
    import TextInput from "@/Shared/TextInput.svelte";
    import EmailInput from "@/Shared/EmailInput.svelte";
    import PasswordInput from "@/Shared/PasswordInput.svelte";

    let form = useForm('CreateUser', {
        name: "",
        email: "",
        password: "",
        password_confirmation: ""
    });

    function submit() {
        $form.post("/register");
    }
</script>

<svelte:head>
    <title>Register {title}</title>
</svelte:head>

<article>
    <form novalidate="" on:submit|preventDefault={submit}>
        <fieldset>
            <legend>Register</legend>
            <TextInput bind:value={$form.name} error={$form.errors.name} label="Name" autofocus required/>
            <EmailInput bind:value={$form.email} error={$form.errors.email} label="Email" required/>
            <PasswordInput bind:value={$form.password} error={$form.errors.password} label="Password" autocomplete="new-password" required/>
            <PasswordInput bind:value={$form.password_confirmation} label="Password" autocomplete="new-password" required/>

            <div class="grid">
                <p style="text-align: end;">
                    <a class="secondary" tabindex="-1" href="/login" use:inertia><small>Already registered?</small></a>
                </p>
            </div>

            <LoadingButton bind:loading={$form.processing} type="submit">Register</LoadingButton>
        </fieldset>
    </form>
</article>
