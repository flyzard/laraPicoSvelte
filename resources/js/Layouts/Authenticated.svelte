<script context="module">
    import { writable } from "svelte/store";
    export const title = writable(null);
</script>
<svelte:head>
    <title>{$title ? `${$title} - Pico` : "Pico"}</title>
</svelte:head>

<!-- Amp Sidebar -->
<amp-sidebar id="sidebar-left" class="sample-sidebar i-amphtml-element i-amphtml-layout-nodisplay i-amphtml-overlay i-amphtml-scrollable i-amphtml-built i-amphtml-layout" layout="nodisplay" side="left" i-amphtml-layout="nodisplay" role="menu" tabindex="-1" hidden="">
    <aside>
        <nav>
        <button on="tap:sidebar-left.close" aria-label="Open menu">
            <svg aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height="16px" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="18" y1="6" x2="6" y2="18">
            </line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
        </button>
        <ul>
            <li>
            <h3>Theme</h3>
            </li>
            <li><a href="./">Auto</a></li>
            <li><a href="./light.html">Light</a></li>
            <li><a href="./dark.html">Dark</a></li>
        </ul>
        </nav>
    </aside>
    <button class="i-amphtml-screen-reader" tabindex="-1">Close the sidebar</button>
</amp-sidebar><!-- ./ Amp Sidebar -->

<!-- Nav -->
<nav>
    <ul>
    <li>
        <button on="tap:sidebar-left.toggle" aria-label="Close menu">
        <svg aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height="16px" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
        </svg>
        </button>
    </li>
    </ul>
    <ul>
    <li>
        <h1>Brand</h1>
    </li>
    </ul>
    <ul>
    <li>
        <a href="#" aria-label="Facebook">
        <svg aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height="16px">
            <path fill="currentColor" d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z">
            </path>
        </svg>
        </a>
    </li>
    </ul>
</nav><!-- ./ Nav -->

<!-- Main -->
<main>
    <hgroup>
    <h1>Google Amp</h1>
    <h2>A simple layout for Google Amp, with inlined CSS, Fixed nav, Sidebar and Social Share.</h2>
    </hgroup>
    <figure>
    <amp-img src="assets/brooke-lark-pGM4sjt_BdQ-unsplash-2000x1000.jpg" srcset="assets/brooke-lark-pGM4sjt_BdQ-unsplash-2000x1000.jpg 2000w,
                        assets/brooke-lark-pGM4sjt_BdQ-unsplash-1000x500.jpg 1000w,
                        assets/brooke-lark-pGM4sjt_BdQ-unsplash-500x250.jpg 500w" width="2000" height="1000" layout="responsive" alt="Cupcake" class="i-amphtml-element i-amphtml-layout-responsive i-amphtml-layout-size-defined i-amphtml-built i-amphtml-layout" i-amphtml-layout="responsive" style="--loader-delay-offset:159ms !important;"><i-amphtml-sizer slot="i-amphtml-svc" style="padding-top: 50%;"></i-amphtml-sizer>
    <img decoding="async" sizes="(max-width: 1919px) 700px, 100vw" alt="Cupcake" srcset="assets/brooke-lark-pGM4sjt_BdQ-unsplash-2000x1000.jpg 2000w,
                        assets/brooke-lark-pGM4sjt_BdQ-unsplash-1000x500.jpg 1000w,
                        assets/brooke-lark-pGM4sjt_BdQ-unsplash-500x250.jpg 500w" src="assets/brooke-lark-pGM4sjt_BdQ-unsplash-2000x1000.jpg" class="i-amphtml-fill-content i-amphtml-replaced-content"></amp-img>
    <figcaption>Image from <a href="https://unsplash.com/photos/pGM4sjt_BdQ" target="_blank">unsplash.com</a></figcaption>
    </figure>
    <p>
    <amp-social-share type="twitter" width="2rem" height="1.5rem" aria-label="Share on Titter" class="i-amphtml-element i-amphtml-layout-fixed i-amphtml-layout-size-defined amp-social-share-twitter i-amphtml-built i-amphtml-layout" i-amphtml-layout="fixed" style="width: 2rem; height: 1.5rem;" role="button" tabindex="0"></amp-social-share>
    <amp-social-share type="facebook" width="2rem" height="1.5rem" aria-label="Share on Facebook" class="i-amphtml-element i-amphtml-layout-fixed i-amphtml-layout-size-defined amp-social-share-facebook i-amphtml-built i-amphtml-layout" i-amphtml-layout="fixed" style="width: 2rem; height: 1.5rem;" role="button" tabindex="0"></amp-social-share>
    <amp-social-share type="pinterest" width="2rem" height="1.5rem" aria-label="Share on Pinterest" class="i-amphtml-element i-amphtml-layout-fixed i-amphtml-layout-size-defined amp-social-share-pinterest i-amphtml-built i-amphtml-layout" i-amphtml-layout="fixed" style="width: 2rem; height: 1.5rem;" role="button" tabindex="0">
    </amp-social-share>
    </p>
    <p>Integer vitae mi sed est rutrum feugiat. Ut bibendum sagittis dictum. Donec dictum pellentesque ipsum quis
    maximus. Fusce porttitor, arcu nec convallis rutrum, lectus justo auctor enim, vitae condimentum quam leo eu ante.
    Mauris nec augue in orci posuere imperdiet. Nam vel aliquet nisl. Vivamus iaculis ultrices nisl vitae ultrices.
    Aenean ac risus a tortor gravida dictum malesuada nec erat. Fusce sodales pharetra facilisis. Nunc viverra, eros
    quis imperdiet dapibus, mauris nunc venenatis lorem, ut pharetra magna lorem in mi.</p>
    <p>Vivamus malesuada fermentum urna, sit amet luctus urna ultrices id. In consequat orci a enim congue, et
    pellentesque mi ultrices. Pellentesque cursus sapien arcu, consectetur faucibus massa sollicitudin sed. Vivamus
    porttitor vehicula leo, id volutpat velit posuere vel. Pellentesque diam dui, faucibus quis mollis eget, consequat
    et est. Nullam vel tellus massa. Suspendisse in lorem ac lorem varius euismod. Cras consectetur suscipit tellus
    rutrum condimentum. Etiam in erat laoreet, congue nisi maximus, tristique lacus. Quisque et lorem ex.</p>
    <article>
    <h3>Subscribe</h3>
    <form action-xhr="./" method="post" novalidate="" class="i-amphtml-form">
        <input type="text" name="firstname" placeholder="First name" aria-label="First name" required="">
        <input type="email" name="email" placeholder="Email address" aria-label="Email address" required="">
        <fieldset>
        <label for="terms">
            <input type="checkbox" role="switch" id="terms" name="terms">
            I agree to the <a href="#">Privacy Policy</a>
        </label>
        </fieldset>
        <button type="submit">Subscribe</button>
    </form>
    </article>
    <p>For this example, we have compiled a custom and class-less version of pico (<a href="https://github.com/picocss/examples/blob/master/google-amp/">Source code here</a>).</p>
</main><!-- ./ Main -->

<!-- Footer -->
<footer>
    <small>Built with <a href="https://picocss.com">Pico</a> • <a href="https://github.com/picocss/examples/tree/master/google-amp/">Source code</a></small>
</footer><!-- ./ Footer -->



<div class="amp-sidebar-mask i-amphtml-sidebar-mask" hidden=""></div>
