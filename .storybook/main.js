const path = require('path')
// const postcss = require('../postcss.config.js')
// const { mergeConfig } = require('vite')
const { VitePWA } = require('vite-plugin-pwa')

module.exports = {
    stories: [
        '../src/components/**/*.story.@(js|jsx|ts|tsx|mdx)',
        '../src/plugins/**/*.story.@(js|jsx|ts|tsx|mdx)',
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
    typescript: {
        check: false,
        checkOptions: {},
        reactDocgen: 'react-docgen-typescript',
        reactDocgenTypescriptOptions: {
            shouldExtractLiteralValuesFromEnum: true,
            propFilter: (prop) =>
                prop.parent ? !/node_modules/.test(prop.parent.fileName) : true
        }
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

        config.plugins.push(VitePWA({}))

        // config.build.commonjsOptions = {
        //     ...config.build.commonjsOptions,
        //     include: ['../tailwind-config.js', '../node_modules/**'],
        //     esmExternals: true
        // }

        return config
    }
}
