import path from 'path'
import type { StorybookConfig } from '@storybook/vue3-vite'
import { VitePWA } from 'vite-plugin-pwa'
import { viteStaticCopy } from 'vite-plugin-static-copy'

const config: StorybookConfig = {
    stories: [
        '../src/components/**/*.stories.@(ts|tsx)',
        '../src/components/**/*.test.@(mdx)'
        // '../src/plugins/**/*.stories.@(mdx|js|jsx|mjs|ts|tsx)',
        // '../src/views/**/*.stories.@(mdx|js|jsx|mjs|ts|tsx)'
    ],
    addons: [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@storybook/addon-interactions',
        'storybook-dark-mode'
    ],
    framework: {
        name: '@storybook/vue3-vite',
        options: {}
    },
    docs: {
        autodocs: false,
        defaultName: 'Documentación'
    }
    // async viteFinal(config, { configType }) {
    //     config.resolve.alias = {
    //         ...config.resolve.alias,
    //         '@': path.resolve(__dirname, '../src'),
    //         'tailwind.config': path.resolve(__dirname, '../tailwind.config.js')
    //     }

    //     // config.build = {
    //     //     ...config.build,
    //     //     ...{
    //     //         rollupOptions: {
    //     //             output: { sanitizeFileName: sanitizeFileName }
    //     //         }
    //     //     }
    //     // }

    //     config.optimizeDeps = {
    //         ...config.optimizeDeps,
    //         include: ['tailwind.config', 'react']
    //     }

    //     config.plugins.push(VitePWA({}))

    //     config.plugins.push(
    //         viteStaticCopy({
    //             targets: [
    //                 {
    //                     src: './plugin.js',
    //                     dest: './'
    //                 }
    //             ]
    //         })
    //     )

    //     // config.build.commonjsOptions = {
    //     //     ...config.build.commonjsOptions,
    //     //     include: ['../tailwind-config.js', '../node_modules/**'],
    //     //     esmExternals: true
    //     // }

    //     return config
    // }
}
export default config
