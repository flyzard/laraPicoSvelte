<script context="module">
    import Unauthenticated, { title } from "@/Layouts/Unauthenticated.svelte";
    export const layout = Unauthenticated;
</script>

<script>
    import { useForm, inertia } from '@inertiajs/svelte';
    import LoadingButton from "@/Shared/LoadingButton.svelte";
    import EmailInput from "@/Shared/EmailInput.svelte";
    import PasswordInput from "@/Shared/PasswordInput.svelte";

    let form = useForm({
        email: "",
        password: "",
        remember: false
    });

    function login() {
        $form.post("/login");
    }
</script>

<svelte:head>
    <title>Login {title}</title>
</svelte:head>

<div class="row d-flex justify-content-end pt-md-5 mt-md-2">
    <div class="col-md-6">
        <p>
            Ainda não tem conta?
            <a class="hover:underline" href="/register" use:inertia>Registe-se aqui</a>
        </p>
    </div>
</div>

<article>
    <form novalidate="" on:submit|preventDefault={login}>
        <fieldset>
            <legend>Login</legend>
            <EmailInput
                bind:value={$form.email}
                error={$form.errors.email}
                label="Email:"
                autofocus
                autocapitalize="off"
            />

            <PasswordInput
                bind:value={$form.password}
                label="Password:"
            />

            <div class="grid">
                <label for="remember">
                    <input type="checkbox" id="remember" name="switch" role="switch" bind:checked={$form.remember}>
                    Remember
                </label>

                <p style="text-align: end;">
                    <a class="secondary" tabindex="-1" href="/forgot-password" use:inertia><small>Esqueceu-se da palavra pass?</small></a>
                </p>
            </div>

            <LoadingButton bind:loading={$form.processing} type="submit">Login</LoadingButton>
        </fieldset>
    </form>
</article>
