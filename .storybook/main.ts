import type { StorybookConfig } from '@storybook/vue3-vite'

const config: StorybookConfig = {
    stories: [
        '../src/components/**/*.stories.@(ts|tsx)',
        '../src/components/**/*.doc.@(mdx)'
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
}
export default config
