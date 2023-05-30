const path = require('path')
// const postcss = require('../postcss.config.js')
// const { mergeConfig } = require('vite')
const { VitePWA } = require('vite-plugin-pwa')
const { viteStaticCopy } = require('vite-plugin-static-copy')

const INVALID_CHAR_REGEX = /[\u0000-\u001F"#$&*+,:;<=>?[\]^`{|}\u007F_]/g
const DRIVE_LETTER_REGEX = /^[a-z]:/i
function sanitizeFileName(name) {
    const match = DRIVE_LETTER_REGEX.exec(name)
    const driveLetter = match ? match[0] : ''
    return (
        driveLetter +
        name.slice(driveLetter.length).replace(INVALID_CHAR_REGEX, '+')
    )
}

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

        config.build = {
            ...config.build,
            ...{
                rollupOptions: {
                    output: { sanitizeFileName: sanitizeFileName }
                }
            }
        }

        config.optimizeDeps = {
            ...config.optimizeDeps,
            include: ['tailwind.config']
        }

        config.plugins.push(VitePWA({}))

        config.plugins.push(
            viteStaticCopy({
                targets: [
                    {
                        src: './plugin.js',
                        dest: './'
                    }
                ]
            })
        )

        // config.build.commonjsOptions = {
        //     ...config.build.commonjsOptions,
        //     include: ['../tailwind-config.js', '../node_modules/**'],
        //     esmExternals: true
        // }

        return config
    }
}
