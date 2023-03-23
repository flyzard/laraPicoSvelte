import { createInertiaApp } from '@inertiajs/svelte'

// Exportar as traduções para o public path
window.__ = text => text;
fetch('/lang/{{ app()->getLocale() }}.json')
.then((response) => response.json())
.then((json) => {
    if (json) {
        window.translations = json;
        window.__ = text => window.translations[text] ?? text;
    }
}).catch(error => console.log("Error loading translation:", error));


createInertiaApp({
    resolve: async name => await import(`./Pages/${name}.svelte`),
    setup({ el, App, props }) {
        new App({ target: el, props })
    },
})
