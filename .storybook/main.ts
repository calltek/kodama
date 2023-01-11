const path = require('path')
const postcss = require('../postcss.config.js')
const { mergeConfig } = require('vite')

module.exports = {
    stories: [
        '../src/components/**/*.story.@(js|jsx|ts|tsx|mdx)',
        '../src/views/**/*.story.@(js|jsx|ts|tsx|mdx)'
    ],
    addons: [
        {
            name: '@storybook/addon-postcss',
            options: {
                postcssLoaderOptions: {
                    implementation: require('postcss')
                }
            }
        },
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@storybook/addon-interactions',
        'storybook-dark-mode'
    ],
    framework: '@storybook/vue3',
    core: {
        builder: '@storybook/builder-vite'
    },
    features: {
        storyStoreV7: true
    },
    async viteFinal(config, { configType }) {
        config.resolve.alias = {
            ...config.resolve.alias,
            '@': path.resolve(__dirname, '../src'),
            'tailwind.config': path.resolve(__dirname, '../tailwind.config.js')
        }

        config.optimizeDeps = {
            ...config.optimizeDeps,
            include: ['tailwind.config']
        }

        // config.build.commonjsOptions = {
        //     ...config.build.commonjsOptions,
        //     include: ['../tailwind-config.js', '../node_modules/**'],
        //     esmExternals: true
        // }

        return config
    }
}
