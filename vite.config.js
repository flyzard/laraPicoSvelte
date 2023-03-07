import { defineConfig } from 'vite';
import fs from 'fs';
import {homedir} from 'os'
import {resolve} from 'path'
import laravel from 'laravel-vite-plugin';
import dynamicImport from 'vite-plugin-dynamic-import'
import { svelte } from "@sveltejs/vite-plugin-svelte";
import preprocess from 'svelte-preprocess';

let host = 'pico.test'

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/js/app.js', 'resources/css/app.scss'],
            valetTls: host,
            refresh: true
        }),
        {
            name: 'blade',
            handleHotUpdate({ file, server }) {
                if (file.endsWith('.blade.php')) {
                    server.ws.send({
                        type: 'full-reload',
                        path: '*',
                    });
                }
            },
        },
        dynamicImport(),
        svelte({
            preprocess: preprocess(),
            compilerOptions: {
                dev: true
            },
            prebundleSvelteLibraries: true,
        })
    ],
    optimizeDeps: {
        include: [
            '@inertiajs/inertia',
            '@inertiajs/svelte',
        ]
    },
    resolve: {
        alias: {
            '~bootstrap': resolve(__dirname, 'node_modules/bootstrap'),
        }
    },
    mode: 'development',

    server: detectServerConfig(host),
})


function detectServerConfig(host) {
    let keyPath = resolve(homedir(), `.config/valet/Certificates/${host}.key`)
    let certificatePath = resolve(homedir(), `.config/valet/Certificates/${host}.crt`)

    if (!fs.existsSync(keyPath)) {
        return {}
    }

    if (!fs.existsSync(certificatePath)) {
        return {}
    }

    return {
        hmr: {host},
        host,
        https: {
            key: fs.readFileSync(keyPath),
            cert: fs.readFileSync(certificatePath),
        },
    }
}
