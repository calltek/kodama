module.exports = {
    stories: [
        '../src/components/**/*.story.mdx',
        '../src/components/**/*.story.@(js|jsx|ts|tsx)'
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
    }
}
