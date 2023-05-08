/// <reference types="vite/client" />
/// <reference types="vite-plugin-pwa/client" />

declare module '*.vue' {
    import type { DefineComponent } from 'vue'
    const component: DefineComponent<{}, {}, any>
    export default component
}

declare module 'tailwind-config' {
    const config: Config
    export default config
}

declare module 'sanitize-html' {
    const sanitizeHtml: any
    export default sanitizeHtml
}
