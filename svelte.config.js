import adapter from "@sveltejs/adapter-static"
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte"

/** @type {import('@sveltejs/kit').Config} */
const config = {
    preprocess: vitePreprocess(),
    kit: {
        adapter: adapter({
            pages: "./build",
            assets: "./build",
            fallback: undefined,
            precompress: true,
            strict: true,
        }),
        paths: {
            base: process.argv.includes("dev") ? "/" : process.env.URL_PATH
        },
        env: {
            publicPrefix: "PUBLIC_",
            privatePrefix: "PRIVATE_"
        },
        alias: {
            $server: "./src/lib/server",
            $components: "./src/lib/components",
            $layouts: "./src/lib/layouts",
            $utils: "./src/lib/utils",
            $images: "./src/lib/images",
            $stores: "./src/lib/stores",
            $styles: "./src/lib/styles",
            $types: "./src/lib/types"
        }
    }
}

export default config
