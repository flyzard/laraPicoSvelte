<script context="module">
    import Unauthenticated, { title } from "@/Layouts/Unauthenticated.svelte";
    export const layout = Unauthenticated;
</script>

<script>
    export let foo;
</script>

<article>
    <p>{foo}</p>
    <h3>Subscribe</h3>
    <form
        action-xhr="./"
        method="post"
        novalidate=""
    >
        <input
            type="text"
            name="firstname"
            placeholder="First name"
            aria-label="First name"
            required=""
        />
        <input
            type="email"
            name="email"
            placeholder="Email address"
            aria-label="Email address"
            required=""
        />
        <fieldset>
            <label for="terms">
                <input
                    type="checkbox"
                    role="switch"
                    id="terms"
                    name="terms"
                />
                I agree to the <a href="/">Privacy Policy</a>
            </label>
        </fieldset>
        <button type="submit">Subscribe</button>
    </form>
</article>
