<script context="module">
    import Unauthenticated, { title } from "@/Layouts/Unauthenticated.svelte";
    export const layout = Unauthenticated;
</script>

<script>
    import { useForm } from '@inertiajs/svelte';
    import LoadingButton from "@/Shared/LoadingButton.svelte";
    import EmailInput from "@/Shared/EmailInput.svelte";

    let form = useForm({email: ""});

    function recoverPassword() {
        $form.post(route('password.email'));
    }
</script>

<svelte:head>
    <title>{__("Recover Password")} {title}</title>
</svelte:head>

<div class="row d-flex justify-content-end pt-md-5 mt-md-2">
    <div class="col-md-6">
        <p>
            {__('Forgot your password? No problem. Just let us know your email address and we will email you a password reset link that will allow you to choose a new one.')}
        </p>
    </div>
</div>

<article>
    <form novalidate="" on:submit|preventDefault={recoverPassword}>
        <fieldset>
            <legend>Login</legend>
            <EmailInput
                bind:value={$form.email}
                error={$form.errors.email}
                label="Email:"
                autofocus
                autocapitalize="off"
            />

            <LoadingButton bind:loading={$form.processing} type="submit">{__('Email Password Reset Link')}</LoadingButton>
        </fieldset>
    </form>
</article>
